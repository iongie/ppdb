import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroUtamaComponent } from './hero-utama/hero-utama.component';
import { SupportUsUtamaComponent } from './support-us-utama/support-us-utama.component';
import { RouterModule } from '@angular/router';
import { InfoTahapanUtamaComponent } from './info-tahapan-utama/info-tahapan-utama.component';
import { InfoJadwalUtamaComponent } from './info-jadwal-utama/info-jadwal-utama.component';
import { LihatHasilSeleksiDetailUtamaComponent } from './lihat-hasil-seleksi-detail-utama/lihat-hasil-seleksi-detail-utama.component';
import { FormHasilSeleksiV2UtamaComponent } from './form-hasil-seleksi-v2-utama/form-hasil-seleksi-v2-utama.component';
import { DirectivesModule } from '../directives/directives.module';
import { FormHasilSeleksiV3UtamaComponent } from './form-hasil-seleksi-v3-utama/form-hasil-seleksi-v3-utama.component';

@NgModule({
  declarations: [
    HeroUtamaComponent,
    SupportUsUtamaComponent,
    InfoTahapanUtamaComponent,
    InfoJadwalUtamaComponent,
    LihatHasilSeleksiDetailUtamaComponent,
    FormHasilSeleksiV2UtamaComponent,
    FormHasilSeleksiV3UtamaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DirectivesModule
  ],
  exports:[
    HeroUtamaComponent,
    SupportUsUtamaComponent,
    InfoTahapanUtamaComponent,
    InfoJadwalUtamaComponent,
    LihatHasilSeleksiDetailUtamaComponent,
    FormHasilSeleksiV2UtamaComponent,
    FormHasilSeleksiV3UtamaComponent
  ]
})
export class ComponentUtamaModule { }
