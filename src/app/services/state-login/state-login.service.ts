import { Injectable } from '@angular/core';
import { Login, defLogin } from '../../interfaces/login.interface';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateLoginService {
  login = new BehaviorSubject<Login>(defLogin);
  getLogin = this.login.asObservable();
  constructor(
    private cookieStorage: CookieService,
  ) { 
    this.initializecookieStorage();
  }

  private async initializecookieStorage() {
    const storedLogin = await this.cookieStorage.get('daftar-ppdb');
    this.login.next(storedLogin.length !== 0 ? JSON.parse(storedLogin): defLogin);
  }

  async updateLogin(newLogin: Login){
    await this.cookieStorage.set('daftar-ppdb', JSON.stringify(newLogin), { expires: newLogin.auth.expires_in!, secure: true, sameSite: 'Lax', });
    this.login.next(newLogin);
  }

  async clearLogin(){
    await this.cookieStorage.delete('daftar-ppdb');
    this.login.next(defLogin);
  }
}
