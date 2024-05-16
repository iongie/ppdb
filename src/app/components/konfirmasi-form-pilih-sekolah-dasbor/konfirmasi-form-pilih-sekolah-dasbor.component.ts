import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, catchError, of, switchMap, take, takeUntil, tap, timer } from 'rxjs';
import { CallApiService } from '../../services/call-api/call-api.service';
import { StatePilihSekolahService } from '../../services/state-pilih-sekolah/state-pilih-sekolah.service';
import { PilihSekolah, defPilihSekolah } from '../../interfaces/daftar-seleksi.interface';
import { StateLoginService } from '../../services/state-login/state-login.service';
import { Router } from '@angular/router';
import { HelperService } from '../../services/helper/helper.service';
import { PilihMenu } from '../../interfaces/pilih-menu.interface';
import { StatePilihMenuService } from '../../services/state-pilih-menu/state-pilih-menu.service';
import { StateResponService } from '../../services/state-respon/state-respon.service';

@Component({
  selector: 'ppdb-konfirmasi-form-pilih-sekolah-dasbor',
  templateUrl: './konfirmasi-form-pilih-sekolah-dasbor.component.html',
  styleUrl: './konfirmasi-form-pilih-sekolah-dasbor.component.css'
})
export class KonfirmasiFormPilihSekolahDasborComponent implements OnInit, OnDestroy {
  private destroy: Subject<void> = new Subject<void>;
  pilihSekolah: PilihSekolah = defPilihSekolah;
  pilihSekolahFormData: FormData | null = null;
  @Output() viewKonfirmasi = new EventEmitter<boolean>();
  @Output() viewRespon = new EventEmitter<boolean>();
  constructor(
    private callApiS: CallApiService,
    private statePilihSekolahS: StatePilihSekolahService,
    private statePilihMenuS: StatePilihMenuService,
    private stateLoginS: StateLoginService,
    private stateResponS: StateResponService,
    private router: Router,
    private helperS: HelperService
  ){}
  ngOnInit(): void {
      this.getPilihSekolah();
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  getPilihSekolah(){
    this.statePilihSekolahS.getPilihSekolah
    .pipe(
      tap((ps) => {
        this.pilihSekolah = ps
      }),
      takeUntil(this.destroy)
    )
    .subscribe()
  }
  
  cancel(){
    this.viewKonfirmasi.emit(false);
  }
  
  submit(){
    of(this.pilihSekolah)
    .pipe(
      tap((pm) => {
        this.pilihSekolahFormData = new FormData();
        const tmsekolah_id = pm.tmsekolah_id!;
        this.pilihSekolahFormData.append('tmsekolah_id', tmsekolah_id.toString());
        const tmdaftarkategori_id = pm.tmdaftarkategori_id!;
        this.pilihSekolahFormData.append('tmdaftarkategori_id', tmdaftarkategori_id.toString());
        this.pilihSekolahFormData.append('pin', pm.pin!)
        this.pilihSekolahFormData.append('ganti', pm.ganti!)
      }),
      switchMap(() => this.stateLoginS.getLogin),
      switchMap((dp) => this.callApiS.post(this.pilihSekolahFormData, 'daftar/pilih', dp.auth.access_token!)),
      tap((r:any)=>{
        this.stateResponS.updateModelModal({mode:'success', pesan: r.message})
      }),
      tap(() => {
        this.viewKonfirmasi.emit(false);
        this.viewRespon.emit(true);
      }),
      switchMap(() => this.statePilihMenuS.getPilihMenu),
      tap((pm)=> 
        this.router.navigate(['dasbor/'+this.helperS.ubahSpasiDanHurufKecil(pm.menu!)+'-hasil-seleksi-saya'])),
      catchError((e:any) => {
        this.viewKonfirmasi.emit(false);
        this.viewRespon.emit(true);
        this.stateResponS.updateModelModal({mode:'error', pesan: e.error.message})
        throw e;
      }),
      take(1)
    ).subscribe()
  }
}
