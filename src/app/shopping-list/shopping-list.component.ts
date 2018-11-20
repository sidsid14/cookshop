import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  existingIngredient: Ingredient;
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Basil Leaves', 15)
  ];
  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }

  editIngredient(ingredient: Ingredient) {
    this.existingIngredient = ingredient;
  }

  onDeleteIngredient(ingredient: Ingredient) {
    const ind = this.ingredients.findIndex(p => (p.name === ingredient.name && p.amount === ingredient.amount));
    console.log(ind);
    if (ind !== -1) {
      this.ingredients.splice(ind, 1);
    }
  }

}
