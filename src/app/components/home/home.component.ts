import { Component, OnInit } from '@angular/core';
import { isNumber } from 'util';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeColor = false;
  recipes: Recipe[] = [];
  selectedRecipe: Recipe;
  constructor(private recipesService: RecipesService,) { }

  ngOnInit() {
  }

  addNewRecipe(value) {
    console.log('addNewRecipe Invoked!');
    this.recipes.push(value);
  }

  setSelectedRecipe(recipe) {
    console.log('recipe::', recipe);
    this.selectedRecipe = recipe;
  }

}
