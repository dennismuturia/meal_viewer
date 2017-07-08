import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector:'meal-list',
  template:`
  <div class="container-fluid">
    <div class="row">
    <select (change)="onchange ($event.target.value)" class="selectpicker">
      <option value="all">All Items</option>
      <option value="more">More than 500 Calories</option>
      <option value="less">Less Than 500 Calories</option>
    </select>
      <div *ngFor="let meal of meals | calories:selectedCalories">
        {{meal.name}}
        {{meal.description}}
        {{meal.calories}}
        <button (click)="editButtonClicked(meal)">Edit</button>
      </div>
    </div>
  </div>
  `
})
export class MealListComponent{
  @Input() meals:Meal[];
  @Output() editButtonClickedSender = new EventEmitter;
  public selectedCalories:string="all";
  onchange(value){
    this.selectedCalories = value;
  }
  editButtonClicked(meal){
    this.editButtonClickedSender.emit(meal)
  }
}
