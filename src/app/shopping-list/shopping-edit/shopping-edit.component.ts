import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientWasAdded = new EventEmitter<Ingredient>();
  @Output() ingredientWasDeleted = new EventEmitter<Ingredient>();
  @Input() existingIngredient: Ingredient;

  constructor() {}

  ngOnInit() {}

  addIngredient(name: string, amount: number) {
    const newIngredient: Ingredient = {
      name: name,
      amount: amount
    };
    this.ingredientWasAdded.emit(newIngredient);
  }

  clearIngredient(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    nameInput.value = '';
    amountInput.value = '';
  }

  deleteIngredient(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    const ingredient: Ingredient = {name: nameInput.value, amount: Number(amountInput.value) };
    this.ingredientWasDeleted.emit(ingredient);
    nameInput.value = '';
    amountInput.value = '';
  }
}
