import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, switchMap, tap, catchError, takeUntil, take } from 'rxjs';
import { CallApiService } from '../../services/call-api/call-api.service';
import { StateLoginService } from '../../services/state-login/state-login.service';

@Component({
  selector: 'ppdb-konfirmasi-logout',
  templateUrl: './konfirmasi-logout.component.html',
  styleUrl: './konfirmasi-logout.component.css'
})
export class KonfirmasiLogoutComponent implements OnInit, OnDestroy {
  private destroy: Subject<void> = new Subject<void>;
  @Output() view = new EventEmitter<boolean>();
  constructor(
    private callApiS: CallApiService,
    private stateLoginS: StateLoginService,
    private router: Router
  ){}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  cancel(){
    this.view.emit(false);
  }

  logout(){
    this.stateLoginS.getLogin
    .pipe(
      switchMap((n)=> this.callApiS.post(null, 'daftar/logout', n.auth.access_token!)),
      tap(()=>{
        this.view.emit(false);
        this.view.complete();
      }),
      tap(()=>this.router.navigate((['/']))),
      tap(()=> this.stateLoginS.clearLogin()),
      catchError((e:Error) => {
        this.view.emit(false);
        throw e;
      }),
      take(1)
    ).subscribe()
  }
}
