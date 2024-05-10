import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputHanyaNomorDirective } from './input-hanya-nomor/input-hanya-nomor.directive';
import { SidebarDropdownDirective } from './sidebar-dropdown/sidebar-dropdown.directive';



@NgModule({
  declarations: [
    InputHanyaNomorDirective,
    SidebarDropdownDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputHanyaNomorDirective,
    SidebarDropdownDirective
  ]
})
export class DirectivesModule { }
