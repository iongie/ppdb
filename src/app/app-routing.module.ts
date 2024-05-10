import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasborAccessGuard } from './guards/dasbor.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./outlets/utama/utama.module').then(m=> m.UtamaModule)
  },
  {
    path: 'dasbor',
    loadChildren: () => import('./outlets/dasbor/dasbor.module').then(m=> m.DasborModule),
    canActivate: [DasborAccessGuard]
  },
  {
    path: 'forbidden',
    loadChildren: () => import('./pages/halaman-403/halaman-403.module').then(m => m.Halaman403Module)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/halaman-404/halaman-404.module').then(m => m.Halaman404Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
