import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { SharedModule } from '../shared/shared.module';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ShoppingListRoutingModule
  ],
  declarations: [ShoppingEditComponent, ShoppingListComponent]
})
export class ShoppingListModule { }
