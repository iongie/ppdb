import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, catchError, map, switchMap, takeUntil, tap } from 'rxjs';
import { StateMenuService } from '../../services/state-menu/state-menu.service';
import { CallApiService } from '../../services/call-api/call-api.service';
import { HelperService } from '../../services/helper/helper.service';
import { StateLoginService } from '../../services/state-login/state-login.service';

@Component({
  selector: 'ppdb-dasbor',
  templateUrl: './dasbor.component.html',
  styleUrl: './dasbor.component.css'
})
export class DasborComponent implements OnInit, OnDestroy {
  open: boolean = true;
  private destroy: Subject<void> = new Subject<void>;

  viewKonfirmasiLogout: boolean = false;
  constructor(
    private helper: HelperService,
    private callApi: CallApiService,
    private stateLogin: StateLoginService,
    private stateMenu: StateMenuService
  ){}
  actionMenu(){
    this.open = !this.open
  }

  actionMenuFromSidebar(ev: boolean){
    this.open = ev
  }

  ngOnInit(): void {
    this.getMenu()
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  getLogout(ev:boolean){
    this.viewKonfirmasiLogout = ev
  }

  getMenu(){
    this.stateLogin.getLogin
    .pipe(
      switchMap((r) => this.callApi.post(null, 'daftar/menu', r.auth.access_token!)),
      map((r: any) => r.data.map((n: any) => {
        let sn = n.submenu.map((sn: any) => {
          return { ...sn, url: 'dasbor/'+this.helper.ubahSpasiDanHurufKecil(n.menu)+'-'+this.helper.ubahSpasiDanHurufKecil(sn.text) }
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
      takeUntil(this.destroy)
    ).subscribe()
  }

  
}
