import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { RecipeService } from '../../recipes/recipe.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private recipeService: RecipeService, private authService: AuthService) { }

  ngOnInit() {
  }

  onSave() {
    this.recipeService.saveRecipes().subscribe((response) => console.log(response), (error) => console.log(error));
  }

  onFetch() {
    this.recipeService.fetchRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

  isAuth() {
    return this.authService.isAuth();
  }
}
