import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegulasiComponent } from './regulasi.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RegulasiComponent
  }
];

@NgModule({
  declarations: [
    RegulasiComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RegulasiModule { }
