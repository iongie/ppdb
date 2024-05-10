import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, catchError, combineLatest, map, of, switchMap, takeUntil, tap, timer } from 'rxjs';
import { CallApiService } from '../../services/call-api/call-api.service';
import { StateLoginService } from '../../services/state-login/state-login.service';
import { StatePilihMenuService } from '../../services/state-pilih-menu/state-pilih-menu.service';
import { DaftarSekolah, defDaftarSekolah } from '../../interfaces/daftar-seleksi.interface';
import { StatePilihSekolahService } from '../../services/state-pilih-sekolah/state-pilih-sekolah.service';
import { HelperService } from '../../services/helper/helper.service';

@Component({
  selector: 'ppdb-form-pilih-sekolah-dasbor',
  templateUrl: './form-pilih-sekolah-dasbor.component.html',
  styleUrl: './form-pilih-sekolah-dasbor.component.css'
})
export class FormPilihSekolahDasborComponent implements OnInit, OnDestroy {
  @Input() title: string | null = null;
  private destroy: Subject<void> = new Subject<void>;
  pilihSekolahForm!: FormGroup;
  pilihSekolahFormData: FormData | null = null;
  actionMessageError: boolean = false;
  messageError: string = '';

  daftarSekolah: DaftarSekolah = defDaftarSekolah;
  getDaftarSekolahError: boolean = false;
  getDaftarSekolahErrorMessage: string | null = null;
  
  @Output() viewKonfirmasi = new EventEmitter<boolean>();
  constructor(
    private fb: FormBuilder,
    private stateLoginS: StateLoginService,
    private statePilihMenuS: StatePilihMenuService,
    private statePilihSekolahS: StatePilihSekolahService,
    private router: Router,
    private callApiS: CallApiService,
    private helperS: HelperService
  ) { }

  ngOnInit(): void {
    this.formPilihSekolah();
    this.getDaftarSekolah();
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  formPilihSekolah() {
    this.pilihSekolahForm = this.fb.group({
      'tmsekolah_id': [{ value: null, disabled: false }, [Validators.required]],
      'pin': [{ value: null, disabled: false }, [Validators.required]],
    })
  }

  getDaftarSekolah() {
    combineLatest([
      this.stateLoginS.getLogin,
      this.statePilihMenuS.getPilihMenu
    ]).pipe(
      switchMap(([lg, pm]) => {
        const id = pm.id!
        return this.callApiS.post({tmdaftarkategori_id: id.toString()}, 'daftar/sekolah', lg.auth.access_token!)
      }),
      tap((n: any) => {
        this.daftarSekolah = n.data
      }),
      catchError((e: any) => {
        this.getDaftarSekolahError = true;
        this.getDaftarSekolahErrorMessage = e.error.message;
        throw e;
      }),
      takeUntil(this.destroy)
    ).subscribe()
  }

  get sekolahControl() {
    return this.pilihSekolahForm.get('tmsekolah_id')!;
  }

  get noSekolah() {
    return this.sekolahControl.hasError('required') && this.sekolahControl.touched;
  }

  get pinControl() {
    return this.pilihSekolahForm.get('pin')!;
  }

  get noPin() {
    return this.pinControl.hasError('required') && this.pinControl.touched;
  }

  onSekolahChange(event: any) {
    const selectedValue = event.target.value;
    this.pilihSekolahForm.get('tmsekolah_id')?.setValue(selectedValue);
  }

  cancel() {
    this.formPilihSekolah();
  }

  submit() {
    of(this.pilihSekolahForm.valid)
      .pipe(
        tap(() => this.actionMessageError = false),
        map(n => {
          if (!n) {
            Object.values(this.pilihSekolahForm.controls).forEach(control => {
              control.markAsTouched();
            });
            throw new Error('harap mengisi form data');
          }
          return n;
        }),
        switchMap(() => this.statePilihMenuS.getPilihMenu),
        tap((pm) => {
          this.statePilihSekolahS.updatePilihSekolah({
            tmsekolah_id: this.pilihSekolahForm.get('tmsekolah_id')?.value,
            tmdaftarkategori_id: pm.id!,
            pin: this.pilihSekolahForm.get('pin')?.value,
            ganti: this.helperS.berisiKata(pm.subMenu!, 'pilih-sekolah') ? '0' : '1',
            title: this.helperS.berisiKata(pm.subMenu!, 'pilih-sekolah') ? 'Apakah Anda yakin akan menyimpan pilihan pendaftaran?' : 'Apakah Anda yakin akan mengganti pilihan pendaftaran?',
          })
        }),
        tap(()=>{
          this.viewKonfirmasi.emit(true);
          this.viewKonfirmasi.complete();
        }),
        switchMap(()=>timer(2000)),
        tap(()=>this.formPilihSekolah()),
        catchError(e => {
          this.actionMessageError = true;
          this.messageError = e.message === 'harap mengisi form data' ? e.message : e.error.message;
          throw e;
        }),
        takeUntil(this.destroy)
      )
      .subscribe()
  }
}
