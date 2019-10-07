import { Component, OnInit } from '@angular/core';
import { isNumber } from 'util';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeColor = false;
  recipes: Recipe[] = [];
  constructor() { }

  ngOnInit() {
  }

  addNewRecipe(value) {
    console.log('addNewRecipe Invoked!');
    this.recipes.push(value);
  }

}
