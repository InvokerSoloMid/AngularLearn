import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RequestService } from '../../services/request.service';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnChanges {
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

  ngOnChanges() {
    console.log('recipe-list ngOnChanges');
  }

  setSelectedRecipe(recipe) {
    this.selectedRecipe.emit(recipe);
    // this.request.getRandomUser().subscribe(response => {
    //   this.fetchRequest = response[0];
    //   console.log('fetchRequest::', this.fetchRequest);
    // });
  }

  deleteRecipe(recipe) {
    this.recipesService.RecipesList = this.recipesService.RecipesList.filter((recipes) => {
      return recipes.description !== recipe.description;
    });
  }

}
