import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HasilSeleksi, defHasilSeleksi } from '../../interfaces/hasil-seleksi.interface';

@Injectable({
  providedIn: 'root'
})
export class StateHasilSeleksiService {
  hasilSeleksi = new Subject<HasilSeleksi>();
  getHasilSeleksi = this.hasilSeleksi.asObservable()
  constructor() { }

  updateHasilSeleksi(newHasilSeleksi: HasilSeleksi){
    this.hasilSeleksi.next(newHasilSeleksi)
  }

  clearHasilSeleksi(){
    this.hasilSeleksi.next(defHasilSeleksi)
  }
}
