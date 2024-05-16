import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Menu, defMenu } from '../../interfaces/sidebar.interface';

@Injectable({
  providedIn: 'root'
})
export class StateMenuService {
  menu = new BehaviorSubject<Menu[]>(defMenu);
  menuError = new BehaviorSubject<boolean>(false);
  menuErrorMessage = new BehaviorSubject<string>('');
  getMenu = this.menu.asObservable();
  getMenuError = this.menuError.asObservable();
  getMenuErrorMessage = this.menuErrorMessage.asObservable();
  constructor() { }

  async updateMenu(newMenu: Menu[]){
    this.menu.next(newMenu)
  }

  async clearMenu(){
    this.menu.next(defMenu)
  }

  async updateMenuError(newMenuError: boolean){
    this.menuError.next(newMenuError)
  }

  async clearMenuError(){
    this.menuError.next(false)
  }

  async updateMenuErrorMessage(newMenuErrorMessage: string){
    this.menuErrorMessage.next(newMenuErrorMessage)
  }

  async clearMenuErrorMessage(){
    this.menuErrorMessage.next('')
  }
}
