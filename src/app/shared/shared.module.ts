import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DropdownDirective],
  exports: [DropdownDirective, CommonModule, FormsModule]
})
export class SharedModule { }
