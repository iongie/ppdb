import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarDasborComponent } from './sidebar-dasbor/sidebar-dasbor.component';
import { DirectivesModule } from '../directives/directives.module';
import { FormPilihSekolahDasborComponent } from './form-pilih-sekolah-dasbor/form-pilih-sekolah-dasbor.component';
import { HasilSeleksiSayaDasborComponent } from './hasil-seleksi-saya-dasbor/hasil-seleksi-saya-dasbor.component';
import { KonfirmasiFormPilihSekolahDasborComponent } from './konfirmasi-form-pilih-sekolah-dasbor/konfirmasi-form-pilih-sekolah-dasbor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResponModalComponent } from './respon-modal/respon-modal.component';
import { KonfirmasiLogoutComponent } from './konfirmasi-logout/konfirmasi-logout.component';

@NgModule({
  declarations: [
    SidebarDasborComponent,
    FormPilihSekolahDasborComponent,
    HasilSeleksiSayaDasborComponent,
    KonfirmasiFormPilihSekolahDasborComponent,
    ResponModalComponent,
    KonfirmasiLogoutComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    ReactiveFormsModule
  ],
  exports:[
    SidebarDasborComponent,
    FormPilihSekolahDasborComponent,
    HasilSeleksiSayaDasborComponent,
    KonfirmasiFormPilihSekolahDasborComponent,
    ResponModalComponent,
    KonfirmasiLogoutComponent
  ]
})
export class ComponentDasborModule { }
