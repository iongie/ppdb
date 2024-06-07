import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegulasiComponent } from './regulasi.component';
import { Routes, RouterModule } from '@angular/router';
import { DirectivesModule } from '../../directives/directives.module';

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
    DirectivesModule,
    RouterModule.forChild(routes)
  ]
})
export class RegulasiModule { }
