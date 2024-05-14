import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';
import { HasilSeleksi, defHasilSeleksi } from '../../interfaces/hasil-seleksi.interface';
import { Kategori, defKategori } from '../../interfaces/kategori.interface';
import { Sekolah, defSekolah } from '../../interfaces/sekolah.interface';
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
}
