import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NilaiRapor, defNilaiRapor } from '../../interfaces/dasbor.interface';

@Component({
  selector: 'ppdb-lihat-daftar-nilai-dasbor',
  templateUrl: './lihat-daftar-nilai-dasbor.component.html',
  styleUrl: './lihat-daftar-nilai-dasbor.component.css'
})
export class LihatDaftarNilaiDasborComponent implements OnInit {
  @Input() nilai: NilaiRapor[] = defNilaiRapor; 
  @Output() view = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  closeModal(){
    this.view.emit(false)
  }
}
