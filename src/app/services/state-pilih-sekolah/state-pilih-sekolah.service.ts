import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PilihSekolah, defPilihSekolah } from '../../interfaces/daftar-seleksi.interface';

@Injectable({
  providedIn: 'root'
})
export class StatePilihSekolahService {
  pilihSekolah = new BehaviorSubject<PilihSekolah>(defPilihSekolah);
  getPilihSekolah = this.pilihSekolah.asObservable();

  konfirmasiPilihSekolah = new BehaviorSubject<boolean>(false);
  getKonfirmasiPilihSekolah = this.konfirmasiPilihSekolah.asObservable();
  constructor() { }

  async updatePilihSekolah(newPilihSekolah: PilihSekolah) {
    this.pilihSekolah.next(newPilihSekolah);
  }

  async clearPilihSekolah(){
    this.pilihSekolah.next(defPilihSekolah);
  }

  async updateKonfirmasiPilihSekolah(newKonfirmasiPilihSekolah: boolean) {
    this.konfirmasiPilihSekolah.next(newKonfirmasiPilihSekolah);
  }

  async clearKonfirmasiPilihSekolah(){
    this.konfirmasiPilihSekolah.next(false);
  }
}
