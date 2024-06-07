import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JadwalComponent } from './jadwal.component';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesModule } from '../../directives/directives.module';

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
    DirectivesModule,
    RouterModule.forChild(routes)
  ]
})
export class JadwalModule { }
