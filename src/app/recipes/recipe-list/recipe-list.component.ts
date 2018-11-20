import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() showRecipeDetails = new EventEmitter<Recipe>();

  recipe: Recipe[] = [
    new Recipe('A test Recipe', 'Description', 'https://recipes.timesofindia.com/photo/53110729.cms'),
    new Recipe('A test 2 Recipe', 'Description 2', 'https://recipes.timesofindia.com/photo/53110729.cms')
  ];

  constructor() { }

  ngOnInit() {
  }

  showDetails(recipe: Recipe) {

    this.showRecipeDetails.emit(recipe);
  }

}
