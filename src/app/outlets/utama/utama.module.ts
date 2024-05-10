import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtamaComponent } from './utama.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentUtamaModule } from '../../components/utama-component.module';
import { HeaderUtamaComponent } from '../../components/header-utama/header-utama.component';
import { HeaderMobileUtamaComponent } from '../../components/header-mobile-utama/header-mobile-utama.component';

const routes: Routes = [
  {
    path: '',
    component: UtamaComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../pages/beranda/beranda.module').then(m => m.BerandaModule)
      },
      {
        path: 'hasil-seleksi',
        loadChildren: () => import('../../pages/hasil-seleksi/hasil-seleksi.module').then(m => m.HasilSeleksiModule),
        // canActivate:[PengumumanPPDBAccessGuard]
      },
      {
        path: 'sign-in-dashboard',
        loadChildren: () => import('../../pages/login/login.module').then(m => m.LoginModule),
      },
      {
        path: 'regulasi-ppdb',
        loadChildren: () => import('../../pages/regulasi/regulasi.module').then(m => m.RegulasiModule)
      },
      {
        path: 'jadwal-ppdb',
        loadChildren: () => import('../../pages/jadwal/jadwal.module').then(m => m.JadwalModule)
      }
    ]
  }
]

@NgModule({
  declarations: [
    UtamaComponent,
    HeaderUtamaComponent,
    HeaderMobileUtamaComponent
  ],
  imports: [
    CommonModule,
    ComponentUtamaModule,
    RouterModule.forChild(routes)
  ]
})
export class UtamaModule { }
