import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { SetFoodItemComponent } from './components/set-food-item/set-food-item.component';
import { FooditemsComponent } from './pages/fooditems/fooditems.component';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { PrimeNgModule } from '../shared/prime-ng/prime-ng.module';
import { MessageService } from 'primeng/api';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SetFoodItemComponent,
    FooditemsComponent,
    AddRestaurantComponent
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule
  ],

  providers: [MessageService]
})
export class RestaurantModule { }
