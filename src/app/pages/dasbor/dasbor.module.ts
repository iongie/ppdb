import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DasborComponent } from './dasbor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LihatDaftarNilaiDasborComponent } from '../../components/lihat-daftar-nilai-dasbor/lihat-daftar-nilai-dasbor.component';

const routes: Routes = [
  {
    path: '',
    component: DasborComponent
  }
]

@NgModule({
  declarations: [
    DasborComponent,
    LihatDaftarNilaiDasborComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class DasborModule { }
