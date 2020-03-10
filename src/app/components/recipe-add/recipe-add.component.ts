import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipesService } from 'src/app/services/recipes.service';

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
  recipeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  }

  addNewRecipe(name, description,url) {
    const returnedRecipe = new Recipe(
      name || 'defaultName',
      description || 'defaultDescription',
      url || 'https://www.kustompcs.co.uk/images/thumbnails/465/465/detailed/21/D323-DOTA-2-logo_eum6-0n.jpg');
    this.newRecipe.emit(returnedRecipe);
    this.recipeName = this.recipeDescription = this.recipeUrl = null;
    this.name.setValue('');
    this.description.setValue('');
    this.recipeForm.reset();
    this.recipesService.RecipesList.push(returnedRecipe);
    console.log('recipesService::', this.recipesService);
  }

  update() {
    this.recipeName = this.recipeForm.value.name;
    this.recipeDescription = this.recipeForm.value.description;
  }

  get name() { return this.recipeForm.get('name'); }
  get description() { return this.recipeForm.get('description'); }

}
