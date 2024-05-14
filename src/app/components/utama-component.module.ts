import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroUtamaComponent } from './hero-utama/hero-utama.component';
import { SupportUsUtamaComponent } from './support-us-utama/support-us-utama.component';
import { RouterModule } from '@angular/router';
import { InfoTahapanUtamaComponent } from './info-tahapan-utama/info-tahapan-utama.component';
import { InfoJadwalUtamaComponent } from './info-jadwal-utama/info-jadwal-utama.component';

@NgModule({
  declarations: [
    HeroUtamaComponent,
    SupportUsUtamaComponent,
    InfoTahapanUtamaComponent,
    InfoJadwalUtamaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeroUtamaComponent,
    SupportUsUtamaComponent,
    InfoTahapanUtamaComponent,
    InfoJadwalUtamaComponent
  ]
})
export class ComponentUtamaModule { }
