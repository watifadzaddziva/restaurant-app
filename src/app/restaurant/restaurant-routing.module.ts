import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { SetFoodItemComponent } from './components/set-food-item/set-food-item.component';
import { FooditemsComponent } from './pages/fooditems/fooditems.component';

const routes: Routes = [
  {path : '', component:AddRestaurantComponent},
  {path: 'home', component:FooditemsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
