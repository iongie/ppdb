import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HasilSeleksi, defHasilSeleksi } from '../../interfaces/hasil-seleksi.interface';

@Injectable({
  providedIn: 'root'
})
export class StateHasilSeleksiService {
  hasilSeleksi = new BehaviorSubject<HasilSeleksi>(defHasilSeleksi);
  getHasilSeleksi = this.hasilSeleksi.asObservable()
  constructor() { }

  updateHasilSeleksi(newHasilSeleksi: HasilSeleksi){
    this.hasilSeleksi.next(newHasilSeleksi)
  }

  clearHasilSeleksi(){
    this.hasilSeleksi.next(defHasilSeleksi)
  }
}
