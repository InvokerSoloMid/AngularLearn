import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  RecipesList: Recipe[] = [];
  constructor() { }
}
