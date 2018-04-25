import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';
import { AuthGuardService } from '../auth/auth-guard.service';

@NgModule({
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  declarations: [HeaderComponent, HomeComponent],
  exports: [AppRoutingModule, HeaderComponent],
  providers: [ShoppingListService, RecipeService, AuthService, AuthGuardService]
})
export class CoreModule { }
