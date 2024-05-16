import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, catchError, map, of, switchMap, take, takeUntil, tap, timer } from 'rxjs';
import { CallApiService } from '../../services/call-api/call-api.service';
import { StatePilihSekolahService } from '../../services/state-pilih-sekolah/state-pilih-sekolah.service';
import { PilihSekolah, defPilihSekolah } from '../../interfaces/daftar-seleksi.interface';
import { StateLoginService } from '../../services/state-login/state-login.service';
import { Router } from '@angular/router';
import { HelperService } from '../../services/helper/helper.service';
import { PilihMenu } from '../../interfaces/pilih-menu.interface';
import { StatePilihMenuService } from '../../services/state-pilih-menu/state-pilih-menu.service';
import { StateResponService } from '../../services/state-respon/state-respon.service';
import { StateMenuService } from '../../services/state-menu/state-menu.service';

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
    private stateMenu: StateMenuService,
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

  getMenu(){
    this.stateLoginS.getLogin
    .pipe(
      switchMap((r) => this.callApiS.post(null, 'daftar/menu', r.auth.access_token!)),
      map((r: any) => r.data.map((n: any) => {
        let sn = n.submenu.map((sn: any) => {
          return { ...sn, url: 'dasbor/'+this.helperS.ubahSpasiDanHurufKecil(n.menu)+'-'+this.helperS.ubahSpasiDanHurufKecil(sn.text) }
        })
        return { ...n, submenu: sn }
      })),
      tap((r: any) => {
        this.stateMenu.updateMenu(r)
      }),
      catchError(e => {
        this.stateMenu.updateMenuError(true);
        this.stateMenu.updateMenuErrorMessage(e.error.message)
        throw e;
      }),
      take(1)
    ).subscribe()
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
      tap((pm)=> {
        this.getMenu();
        this.router.navigate(['dasbor/'+this.helperS.ubahSpasiDanHurufKecil(pm.menu!)+'-hasil-seleksi-saya'])
      }),
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
