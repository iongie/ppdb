import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { firstValueFrom } from "rxjs";
import { StateLoginService } from "../services/state-login/state-login.service";
import { Login, defLogin } from "../interfaces/login.interface";
import { StatePilihMenuService } from "../services/state-pilih-menu/state-pilih-menu.service";
import { PilihMenu, defPilihMenu } from "../interfaces/pilih-menu.interface";

export const ProcessAccessGuard: CanActivateFn = async (route, state) => {
    const routeServ = inject(Router);
    const access = inject(StatePilihMenuService);
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const pilihMenu: PilihMenu = await firstValueFrom(access.getPilihMenu);
    return pilihMenu !== defPilihMenu ? true : (routeServ.navigate(['dasbor']), false)
  };