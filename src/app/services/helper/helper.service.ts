import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  ubahSpasiDanHurufKecil(teks: string) {
    const teksTanpaSpecialChars = teks.replace(/[^\w\s-]/g, '');
    // Mengubah spasi menjadi tanda hubung (-)
    const teksTanpaSpasi = teksTanpaSpecialChars.replace(/\s+/g, '-');
    // Mengonversi huruf besar menjadi huruf kecil
    const teksKecil = teksTanpaSpasi.toLowerCase();
    return teksKecil;
  }

  berisiKata(text: string, word: string): boolean {
    return text.includes(word);
  }
}
