import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject, of, switchMap, tap, catchError, takeUntil, map } from 'rxjs';
import { Kategori, defKategori } from '../../interfaces/kategori.interface';
import { Sekolah, defSekolah } from '../../interfaces/sekolah.interface';
import { CallApiService } from '../../services/call-api/call-api.service';
import { StateHasilSeleksiService } from '../../services/state-hasil-seleksi/state-hasil-seleksi.service';

@Component({
  selector: 'ppdb-form-hasil-seleksi-v2-utama',
  templateUrl: './form-hasil-seleksi-v2-utama.component.html',
  styleUrl: './form-hasil-seleksi-v2-utama.component.css'
})
export class FormHasilSeleksiV2UtamaComponent implements OnInit, OnDestroy {
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

  selectedKategoriIndex!: number;
  selectedSekolahIndex!: number;

  openFilter: boolean = false;
  constructor(
    private fb: FormBuilder,
    private callApiS: CallApiService,
    private hasilSeleksiS: StateHasilSeleksiService
  ) { }


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

  onSekolahChange(event: number) {
    const selectedValue = event;
    this.hasilSeleksiPpdbForm.get('tmsekolah_id')?.setValue(selectedValue);
    this.selectedSekolahIndex = selectedValue;
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

  onKategoriChange(event: number) {
    const selectedValue = event;
    this.hasilSeleksiPpdbForm.get('tmdaftarkategori_id')?.setValue(selectedValue);
    this.selectedKategoriIndex = selectedValue;
  }

  refreshDataGetKategori() {
    this.getKategori();
  }

  submit() {
    of(this.hasilSeleksiPpdbForm.valid)
      .pipe(
        tap(() => {
          this.isLoading = true;
          this.actionMessageError = false;
        }),
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
        tap((r: any) => {
          this.isLoading = false;
          this.hasilSeleksiS.updateHasilSeleksi(r.data);
          this.openFilter = true;
        }),
        catchError((e) => {
          this.isLoading = false;
          this.hasilSeleksiS.clearHasilSeleksi()
          this.actionMessageError = true;
          this.messageError = e.message === 'harap mengisi form data' ? e.message : e.error.message;
          throw e;
        }),
        takeUntil(this.destroy)
      ).subscribe()
  }

  action(){
    this.openFilter = false;
    this.hasilSeleksiS.clearHasilSeleksi();
  }
}
