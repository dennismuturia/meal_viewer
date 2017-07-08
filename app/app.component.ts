import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="Jumbotron">
    <h2>Meal App</h2>
  </div>
  <div class="col-md-4">
  <new-meal (newMealSender)="createMeal($event)"></new-meal>
  </div>
  <div class="col-md-4">
    <meal-list [meals] = 'meals' (editButtonClickedSender)='editMeal($event)'></meal-list>
  </div>
  <div class="col-md-4">
    <edit-meal (okayButtonSender)='changeSelectedMealValue($event)' [selectedMeal] = 'selectedMeal'></edit-meal>
</div>
  `
})

export class AppComponent {
  public editFormVisible:boolean = false;
  public meals:Meal[] = [
    new Meal("Githeri", "Beans and maize", 600),
    new Meal("Ugali", "Mahindi", 700)
  ]
  public selectedMeal:Meal = null;
  editMeal(meal){
    this.selectedMeal = meal;
  }
  createMeal(newMeal){
    this.meals.push(newMeal);
  }
  changeSelectedMealValue(){
    this.selectedMeal = null;
  }
}
