import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Peserta, defDetailPeserta } from '../../interfaces/hasil-seleksi.interface';

@Component({
  selector: 'ppdb-lihat-hasil-seleksi-detail-utama',
  templateUrl: './lihat-hasil-seleksi-detail-utama.component.html',
  styleUrl: './lihat-hasil-seleksi-detail-utama.component.css'
})
export class LihatHasilSeleksiDetailUtamaComponent implements OnInit {
@Input() peserta: Peserta = defDetailPeserta; 
@Output() view = new EventEmitter<boolean>();

ngOnInit(): void {
}

closeModal(){
  this.view.emit(false)
}
}
