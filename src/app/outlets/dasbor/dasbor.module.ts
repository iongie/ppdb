import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DasborComponent } from './dasbor.component';
import { Routes, RouterModule } from '@angular/router';
import { ComponentDasborModule } from '../../components/dasbor-component.module';
import { ProcessAccessGuard } from '../../guards/proses.guard';
import { DasborAccessGuard } from '../../guards/dasbor.guard';

const routes: Routes = [
  {
    path: '',
    component: DasborComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../pages/dasbor/dasbor.module').then(m => m.DasborModule),
        canActivate: [DasborAccessGuard]
      },
      {
        path: ':id',
        loadChildren: () => import('../../pages/proses/proses.module').then(m => m.ProsesModule),
        canActivate: [ProcessAccessGuard]
      }
    ]
  }
]

@NgModule({
  declarations: [
    DasborComponent
  ],
  imports: [
    CommonModule,
    ComponentDasborModule,
    RouterModule.forChild(routes)
  ]
})
export class DasborModule { }
