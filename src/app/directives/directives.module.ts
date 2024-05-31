import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputHanyaNomorDirective } from './input-hanya-nomor/input-hanya-nomor.directive';
import { SidebarDropdownDirective } from './sidebar-dropdown/sidebar-dropdown.directive';
import { HighlightSelectedDirective } from './highlight-selected/highlight-selected.directive';



@NgModule({
  declarations: [
    InputHanyaNomorDirective,
    SidebarDropdownDirective,
    HighlightSelectedDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputHanyaNomorDirective,
    SidebarDropdownDirective,
    HighlightSelectedDirective
  ]
})
export class DirectivesModule { }
