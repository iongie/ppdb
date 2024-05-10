import { Injectable } from '@angular/core';
import { PilihMenu, defPilihMenu } from '../../interfaces/pilih-menu.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatePilihMenuService {
  pilihMenu = new BehaviorSubject<PilihMenu>(defPilihMenu);
  getPilihMenu = this.pilihMenu.asObservable()
  constructor() { }

  updatepilihMenu(newPilihMenu: PilihMenu){
    this.pilihMenu.next(newPilihMenu)
  }

  clearpilihMenu(){
    this.pilihMenu.next(defPilihMenu)
  }
}
