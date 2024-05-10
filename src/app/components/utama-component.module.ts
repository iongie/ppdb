import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroUtamaComponent } from './hero-utama/hero-utama.component';
import { SupportUsUtamaComponent } from './support-us-utama/support-us-utama.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeroUtamaComponent,
    SupportUsUtamaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeroUtamaComponent,
    SupportUsUtamaComponent
  ]
})
export class ComponentUtamaModule { }
