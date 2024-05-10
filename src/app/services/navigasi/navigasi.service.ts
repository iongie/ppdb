import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigasiService {
  url = new BehaviorSubject<string>('');
  dapatkanUrl = this.url.asObservable();
  constructor() { }

  async perbaruiUrl(urlBaru: string) {
    this.url.next(urlBaru)
  }
}
