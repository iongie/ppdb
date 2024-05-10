import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { firstValueFrom } from "rxjs";
import { StateLoginService } from "../services/state-login/state-login.service";
import { Login, defLogin } from "../interfaces/login.interface";

export const DasborAccessGuard: CanActivateFn = async (route, state) => {
    const routeServ = inject(Router);
    const access = inject(StateLoginService);
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const login: Login = await firstValueFrom(access.getLogin);
    console.log(new Date(login.auth.expires_in!), login.auth.expires_in!);
    
    return login !== defLogin ? true : (routeServ.navigate(['forbidden']), false)
  };