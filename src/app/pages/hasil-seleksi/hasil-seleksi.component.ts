import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';
import { HasilSeleksi, Peserta, defDetailPeserta, defHasilSeleksi } from '../../interfaces/hasil-seleksi.interface';
import { StateHasilSeleksiService } from '../../services/state-hasil-seleksi/state-hasil-seleksi.service';

@Component({
  selector: 'ppdb-hasil-seleksi',
  templateUrl: './hasil-seleksi.component.html',
  styleUrl: './hasil-seleksi.component.css'
})
export class HasilSeleksiComponent implements OnInit, OnDestroy {
  private destroy: Subject<void> = new Subject<void>;
  hasilSeleksi: HasilSeleksi = defHasilSeleksi;
  tooltipVisible:any[] = []

  detailPeserta: Peserta = defDetailPeserta;
  viewDetailPeserta: boolean = false;

  constructor(
    private hasilSeleksiS: StateHasilSeleksiService
  ){}

  ngOnInit(): void {
    this.getHasilSeleksi();
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  getHasilSeleksi(){
    this.hasilSeleksiS.getHasilSeleksi
    .pipe(
      tap((m:any) => {
        this.hasilSeleksi = m
        this.tooltipVisible = new Array(this.hasilSeleksi.peserta.length).fill(false);
      }),
      takeUntil(this.destroy)
    ).subscribe()
  }

  showTooltip(index: number) {
    this.tooltipVisible[index] = true;
  }

  hideTooltip(index: number) {
    this.tooltipVisible[index] = false;
  }

  openDetail(i: number){
    this.detailPeserta = this.hasilSeleksi.peserta[i];
    this.viewDetailPeserta = true;
  }

  getDetail(ev: boolean){
    this.viewDetailPeserta = ev
  }
}
