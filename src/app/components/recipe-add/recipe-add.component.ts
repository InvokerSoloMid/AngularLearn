import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss']
})
export class RecipeAddComponent implements OnInit {
  @Output() newRecipe = new EventEmitter<Recipe>();
  recipeName: string;
  recipeDescription: string;
  recipeUrl: string;
  constructor() { }

  ngOnInit() {
  }

  addNewRecipe(name, description,url) {
    const returnedRecipe = new Recipe(
      name || 'defaultName',
      description || 'defaultDescription',
      url || 'https://www.kustompcs.co.uk/images/thumbnails/465/465/detailed/21/D323-DOTA-2-logo_eum6-0n.jpg');
    this.newRecipe.emit(returnedRecipe);
    this.recipeName = this.recipeDescription = this.recipeUrl = null;
  }

}
