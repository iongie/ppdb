import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, catchError, switchMap, takeUntil, tap } from 'rxjs';
import { NilaiRapor, defNilaiRapor, RiwayatPilihan, defRiwayatPilihan } from '../../interfaces/dasbor.interface';
import { User, defUser } from '../../interfaces/login.interface';
import { StateLoginService } from '../../services/state-login/state-login.service';
import { CallApiService } from '../../services/call-api/call-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ppdb-dasbor',
  templateUrl: './dasbor.component.html',
  styleUrl: './dasbor.component.css'
})
export class DasborComponent implements OnInit, OnDestroy {
  private destroy: Subject<void> = new Subject<void>; 
  user: User = defUser;
  nilai: NilaiRapor[] = defNilaiRapor;
  riwayatPilihan: RiwayatPilihan = defRiwayatPilihan;
  getDasborError: boolean = false;
  getDasborErrorMessage: string | null = null;
  viewLihatDaftarNilai: boolean = false;
  constructor(
    private callApiS: CallApiService,
    private stateLoginS: StateLoginService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.getDasbor();
  }
  
  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  getDasbor(){
    this.stateLoginS.getLogin
    .pipe(
      tap((u)=> {
        this.user = u.user
      }),
      switchMap((u)=> this.callApiS.get('siswa/nilai/'+u.user.siswa_id)),
      tap((n: any)=> this.nilai = n.data),
      switchMap((u)=> this.stateLoginS.getLogin),
      switchMap((u)=> this.callApiS.post(null, 'daftar/riwayat', u.auth.access_token!)),
      tap((n:any)=> this.riwayatPilihan = n.data),
      catchError(e => {
        this.getDasborError = true;
        this.getDasborErrorMessage = e.error.message;
        if (e.error.message == 'Unauthorized. Access denied.'){
          this.stateLoginS.clearLogin();
          this.router.navigate(['/'])
        }
        throw e;
      }),
      takeUntil(this.destroy)
    ).subscribe()
  }

  refreshDataGetDasbor(){
    this.getDasbor();
  }

  lihatDaftarNilai(){
    this.viewLihatDaftarNilai = !this.viewLihatDaftarNilai
  }

  getLihatDaftarNilai(ev: boolean){
    this.viewLihatDaftarNilai = ev
  }
}


