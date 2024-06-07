import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputHanyaNomorDirective } from './input-hanya-nomor/input-hanya-nomor.directive';
import { SidebarDropdownDirective } from './sidebar-dropdown/sidebar-dropdown.directive';
import { HighlightSelectedDirective } from './highlight-selected/highlight-selected.directive';
import { TitleBarDirective } from './title-bar/title-bar.directive';



@NgModule({
  declarations: [
    InputHanyaNomorDirective,
    SidebarDropdownDirective,
    HighlightSelectedDirective,
    TitleBarDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputHanyaNomorDirective,
    SidebarDropdownDirective,
    HighlightSelectedDirective,
    TitleBarDirective
  ]
})
export class DirectivesModule { }
