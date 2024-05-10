import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProsesComponent } from './proses.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ComponentDasborModule } from '../../components/dasbor-component.module';

const routes: Routes = [
  {
    path: '',
    component: ProsesComponent
  }
]


@NgModule({
  declarations: [
    ProsesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentDasborModule,
    RouterModule.forChild(routes)
  ]
})
export class ProsesModule { }
