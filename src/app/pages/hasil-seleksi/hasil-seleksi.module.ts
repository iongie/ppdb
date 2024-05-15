import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasilSeleksiComponent } from './hasil-seleksi.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FormHasilSeleksiUtamaComponent } from '../../components/form-hasil-seleksi-utama/form-hasil-seleksi-utama.component';
import { ComponentUtamaModule } from '../../components/utama-component.module';

const routes: Routes = [
  {
    path: '',
    component: HasilSeleksiComponent
  }
] 

@NgModule({
  declarations: [
    HasilSeleksiComponent,
    FormHasilSeleksiUtamaComponent
  ],
  imports: [
    CommonModule,
    ComponentUtamaModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class HasilSeleksiModule { }
