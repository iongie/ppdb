import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JadwalComponent } from './jadwal.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: JadwalComponent
  }
];

@NgModule({
  declarations: [
    JadwalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class JadwalModule { }
