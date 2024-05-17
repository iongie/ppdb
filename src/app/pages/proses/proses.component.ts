import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, tap, takeUntil, timer, of, switchMap } from 'rxjs';
import { HelperService } from '../../services/helper/helper.service';
import { StatePilihSekolahService } from '../../services/state-pilih-sekolah/state-pilih-sekolah.service';

@Component({
  selector: 'ppdb-proses',
  templateUrl: './proses.component.html',
  styleUrl: './proses.component.css'
})
export class ProsesComponent implements OnInit, OnDestroy {
  private destroy: Subject<void> = new Subject<void>;
  menuPilihSekolah: boolean = false;
  menuGantiSekolah: boolean = false;
  menuHasilSeleksiSaya: boolean = false;
  title: string | null = null;
  
  
  viewKonfirmasi : boolean = false;
  viewRespon : boolean = false;

  actionMessageGantiPilihan: boolean = false;
  messageGantiPilihan: string = '';
  constructor(
    private aktifRoute: ActivatedRoute,
    private helperS: HelperService,
  ){
  }

  ngOnInit(): void {
    this.view();
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  view(){
    this.aktifRoute.params
    .pipe(
      tap(res=>{
        this.menuPilihSekolah = this.helperS.berisiKata(res['id'], 'pilih-sekolah');
        this.menuGantiSekolah = this.helperS.berisiKata(res['id'], 'ganti-pilihan');
        this.menuHasilSeleksiSaya = this.helperS.berisiKata(res['id'], 'hasil-seleksi-saya');
        if(this.menuPilihSekolah){
          this.title = 'Daftar Sekolah';
          this.actionMessageGantiPilihan = false;
          this.messageGantiPilihan = '';
        }else if(this.menuGantiSekolah){
          this.title = 'Ganti Pilihan Sekolah';
          this.actionMessageGantiPilihan = true;
          this.messageGantiPilihan = 'Proses pergantian sekolah hanya dapat dilakukan sebanyak tiga kali.';
        }
      }),
      takeUntil(this.destroy)
    ).subscribe()
  }

  getKonfirmasi(ev:boolean){
    this.viewKonfirmasi = ev;
  }

  getRespon(ev:boolean){
    of(ev)
    .pipe(
      tap((r)=>this.viewRespon = r),
      switchMap(() => timer(3000)),
      tap((r)=>this.viewRespon = false),
      takeUntil(this.destroy)
    ).subscribe()
  }
}
