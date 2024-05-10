import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, catchError, combineLatest, switchMap, takeUntil, tap } from 'rxjs';
import { HasilSeleksiSaya, defHasilSeleksiSaya } from '../../interfaces/hasil-seleksi-saya.interface';
import { StateLoginService } from '../../services/state-login/state-login.service';
import { StatePilihMenuService } from '../../services/state-pilih-menu/state-pilih-menu.service';
import { User, defUser } from '../../interfaces/login.interface';
import { Router } from '@angular/router';
import { PilihMenu, defPilihMenu } from '../../interfaces/pilih-menu.interface';
import { CallApiService } from '../../services/call-api/call-api.service';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ppdb-hasil-seleksi-saya-dasbor',
  templateUrl: './hasil-seleksi-saya-dasbor.component.html',
  styleUrl: './hasil-seleksi-saya-dasbor.component.css'
})
export class HasilSeleksiSayaDasborComponent implements OnInit, OnDestroy {
  private destroy: Subject<void> = new Subject<void>;
  hasilSeleksiSaya: HasilSeleksiSaya = defHasilSeleksiSaya;
  pilihMenu: PilihMenu = defPilihMenu;
  user: User = defUser;
  url : SafeUrl | null = null;
  
  getHasilSeleksiSayaError: boolean = false;
  getHasilSeleksiSayaErrorMessage: string | null = null;
  constructor(
    private stateLoginS: StateLoginService,
    private statePilihMenuS: StatePilihMenuService,
    private router: Router,
    private callApiS: CallApiService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getHasilSeleksiSaya();
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  getHasilSeleksiSaya() {
    combineLatest([
      this.stateLoginS.getLogin,
      this.statePilihMenuS.getPilihMenu
    ]).pipe(
      tap(([lg, pm]) => {
        this.user = lg.user;
        this.pilihMenu = pm;
      }),
      switchMap(([lg, pm]) => this.callApiS.post({tmdaftarkategori_id: pm.id}, 'daftar/me_seleksi', lg.auth.access_token!)),
      tap((r:any)=> this.hasilSeleksiSaya = r.data),
      switchMap(()=> this.stateLoginS.getLogin),
      switchMap((lg) => this.callApiS.post(null, 'daftar/cetak', lg.auth.access_token!)),
      tap((r:any)=> this.url = this.sanitizer.bypassSecurityTrustUrl(r.data.link_path)),
      catchError((e: any) => {
        this.getHasilSeleksiSayaError = true;
        this.getHasilSeleksiSayaErrorMessage = e.error.message;
        throw e; 
      }),
      takeUntil(this.destroy)
    ).subscribe()
  }
}
