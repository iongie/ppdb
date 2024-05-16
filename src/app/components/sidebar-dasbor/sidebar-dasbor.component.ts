import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, catchError, map, of, switchMap, takeUntil, tap } from 'rxjs';
import { Menu, defMenu } from '../../interfaces/sidebar.interface';
import { HelperService } from '../../services/helper/helper.service';
import { CallApiService } from '../../services/call-api/call-api.service';
import { Router } from '@angular/router';
import { StateLoginService } from '../../services/state-login/state-login.service';
import { StatePilihMenuService } from '../../services/state-pilih-menu/state-pilih-menu.service';

@Component({
  selector: 'ppdb-sidebar-dasbor',
  templateUrl: './sidebar-dasbor.component.html',
  styleUrl: './sidebar-dasbor.component.css'
})
export class SidebarDasborComponent implements OnInit, OnDestroy {
  private destroy: Subject<void> = new Subject<void>;
  menu: Menu[] = defMenu;
  menuError: boolean = false;
  menuErrorMessage: string = '';
  isLoading: boolean = false;

  @Output() view = new EventEmitter<boolean>();
  @Output() viewKonfirmasiLogout = new EventEmitter<boolean>();
  constructor(
    private helperS: HelperService,
    private callApiS: CallApiService,
    private router: Router,
    private stateLoginS: StateLoginService,
    private statePilihMenuS: StatePilihMenuService
  ) { }
  ngOnInit(): void {
    this.getMenu();
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  getMenu() {
    of(this.isLoading)
      .pipe(
        tap(() => this.isLoading = true),
        switchMap(() => this.stateLoginS.getLogin),
        switchMap((r) => this.callApiS.post(null, 'daftar/menu', r.auth.access_token!)),
        map((r: any) => r.data.map((n: any) => {
          let sn = n.submenu.map((sn: any) => {
            return { ...sn, url: 'dasbor/'+this.helperS.ubahSpasiDanHurufKecil(n.menu)+'-'+this.helperS.ubahSpasiDanHurufKecil(sn.text) }
          })
          return { ...n, submenu: sn }
        })),
        tap((r: any) => {
          this.isLoading = false;
          this.menu = r;
        }),
        catchError(e => {
          this.isLoading = false;
          this.menuError = true;
          this.menuErrorMessage = e.error.message
          throw e;
        }),
        takeUntil(this.destroy)
      )
      .subscribe()
  }

  refreshDataGetMenu(){
    this.getMenu()
  }

  goToPage(url: string, id: number, menu: string, subMenu: string, disabled: number) {
    if(disabled !== 1){
      this.router.navigate([url]);
      this.view.emit(true);
      this.statePilihMenuS.updatepilihMenu({
        id: id,
        menu: menu,
        subMenu: subMenu
      })
    }
  }

  gotToDasbor(){
    this.router.navigate(['/dasbor']);
    this.view.emit(true);
    this.statePilihMenuS.clearpilihMenu();
  }

  logout(){
    this.viewKonfirmasiLogout.emit(true);
    this.view.emit(true);
  }
}
