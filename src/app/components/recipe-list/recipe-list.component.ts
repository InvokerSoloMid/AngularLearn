import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Input() recipes: Recipe[] = [
    new Recipe('recipeName', 'new Recipe',
    'https://www.kustompcs.co.uk/images/thumbnails/465/465/detailed/21/D323-DOTA-2-logo_eum6-0n.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
