import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-display',
  templateUrl: './recipe-display.component.html',
  styleUrls: ['./recipe-display.component.scss']
})
export class RecipeDisplayComponent implements OnInit {
  @Input() recipeToDisplay: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
