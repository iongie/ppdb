import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, catchError, map, of, switchMap, takeUntil, tap } from 'rxjs';
import { Kategori, defKategori } from '../../interfaces/kategori.interface';
import { Sekolah, defSekolah } from '../../interfaces/sekolah.interface';
import { StateHasilSeleksiService } from '../../services/state-hasil-seleksi/state-hasil-seleksi.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CallApiService } from '../../services/call-api/call-api.service';

@Component({
  selector: 'ppdb-form-hasil-seleksi-utama',
  templateUrl: './form-hasil-seleksi-utama.component.html',
  styleUrl: './form-hasil-seleksi-utama.component.css'
})
export class FormHasilSeleksiUtamaComponent implements OnInit, OnDestroy {
  private destroy: Subject<void> = new Subject<void>;
  sekolah: Sekolah[] = defSekolah;
  sekolahError: boolean = false;
  sekolahErrorMessage: string = '';
  kategori: Kategori[] = defKategori;
  kategoriError: boolean = false;
  kategoriErrorMessage: string | null = null;

  hasilSeleksiPpdbForm!: FormGroup;
  hasilSeleksiPpdbFormData: FormData | null = null;
  actionMessageError: boolean = false;
  messageError: string = '';
  isLoading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private callApiS: CallApiService,
    private hasilSeleksiS: StateHasilSeleksiService
  ){}


  ngOnInit(): void {
    this.formHasilSeleksi();
    this.getSekolah();
    this.getKategori();
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  formHasilSeleksi() {
    this.hasilSeleksiPpdbForm = this.fb.group({
      'tmsekolah_id': [{ value: null, disabled: false }, [Validators.required]],
      'tmdaftarkategori_id': [{ value: null, disabled: false }, [Validators.required]]
    })
  }

  get sekolahControl() {
    return this.hasilSeleksiPpdbForm.get('tmsekolah_id')!;
  }

  get noSekolah() {
    return this.sekolahControl.hasError('required') && this.sekolahControl.touched;
  }

  get kategoriControl() {
    return this.hasilSeleksiPpdbForm.get('tmdaftarkategori_id')!;
  }

  get noKategori() {
    return this.kategoriControl.hasError('required') && this.kategoriControl.touched;
  }

  getSekolah() {
    of(this.sekolahError = false)
      .pipe(
        switchMap(() => this.callApiS.get('sekolah')),
        tap((r: any) => this.sekolah = r.data),
        catchError(e => {
          this.sekolahError = true;
          this.sekolahErrorMessage = e.statusText
          throw e;
        }),
        takeUntil(this.destroy)
      )
      .subscribe()
  }

  onSekolahChange(event: any) {
    const selectedValue = event.target.value;
    this.hasilSeleksiPpdbForm.get('tmsekolah_id')?.setValue(selectedValue);
  }

  refreshDataGetSekolah() {
    this.getSekolah();
  }

  getKategori() {
    of(this.kategoriError = false)
      .pipe(
        switchMap(() => this.callApiS.get('daftar/kategori')),
        tap((r: any) => this.kategori = r.data),
        catchError(e => {
          this.kategoriError = true;
          this.kategoriErrorMessage = e.statusText
          throw e;
        }),
        takeUntil(this.destroy)
      )
      .subscribe()
  }

  onKategoriChange(event: any) {
    const selectedValue = event.target.value;
    this.hasilSeleksiPpdbForm.get('tmdaftarkategori_id')?.setValue(selectedValue);
  }

  refreshDataGetKategori() {
    this.getKategori();
  }

  submit(){
    of(this.hasilSeleksiPpdbForm.valid)
    .pipe(
      tap(() => this.isLoading = true),
      map(n => {
        if (!n) {
          Object.values(this.hasilSeleksiPpdbForm.controls).forEach(control => {
            control.markAsTouched();
          });
          throw new Error('harap mengisi form data');
        }
        return n;
      }),
      tap((r) => {
        this.hasilSeleksiPpdbFormData = new FormData();
        this.hasilSeleksiPpdbFormData.append('tmsekolah_id', this.hasilSeleksiPpdbForm.get('tmsekolah_id')?.value)
        this.hasilSeleksiPpdbFormData.append('tmdaftarkategori_id', this.hasilSeleksiPpdbForm.get('tmdaftarkategori_id')?.value)
      }),
      switchMap(() => this.callApiS.post(this.hasilSeleksiPpdbFormData, 'pengumuman/pendaftar')),
      tap((r:any) => {
        this.isLoading = false;
        this.hasilSeleksiS.updateHasilSeleksi(r.data)
      }),
      catchError((e) => {
        this.isLoading = false;
        this.hasilSeleksiS.clearHasilSeleksi()
        this.actionMessageError = true;
        this.messageError = e.message === 'harap mengisi form data' ? e.message : e.error.message ;
        throw e;
      }),
      takeUntil(this.destroy)
    ).subscribe()
  }

}
