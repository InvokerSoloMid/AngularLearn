import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RequestService } from '../../services/request.service';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Input() recipes: Recipe[] = [];
  @Input() isNested: boolean;
  @Output() selectedRecipe = new EventEmitter();
  fetchRequest: any;

  constructor(
    private request: RequestService,
    private recipesService: RecipesService,
    ) { }

  ngOnInit() {
    this.recipes = this.recipes.length
      ? this.recipes
      : this.recipesService.RecipesList;
      console.log('recipesList onInit service::', this.recipesService);
  }

  setSelectedRecipe(recipe) {
    console.log('request::', this.request);
    console.log('recipe-list select::', recipe);
    this.selectedRecipe.emit(recipe);
    // this.request.getRandomUser().subscribe(response => {
    //   this.fetchRequest = response[0];
    //   console.log('fetchRequest::', this.fetchRequest);
    // });
  }

  deleteRecipe(recipe) {
    console.log('recipe::', recipe);
    this.recipesService.RecipesList = this.recipesService.RecipesList.filter((recipes) => {
      return recipes.description !== recipe.description;
    });
  }

}
