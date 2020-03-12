import { Component, OnInit, HostListener } from '@angular/core';
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
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    // console.log('keyDown enent!');
  }

  @HostListener('document:mousedown') fff() {
    // console.log('event::', event);
  }

  addNewRecipe(value) {
    this.recipes.push(value);
  }

  setSelectedRecipe(recipe) {
    this.selectedRecipe = recipe;
  }

}
