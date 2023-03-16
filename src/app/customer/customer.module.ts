import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { RestaurantPageComponent } from './pages/restaurant-page/restaurant-page.component';
import { PrimeNgModule } from '../shared/prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    RestaurantPageComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    PrimeNgModule
  ]
})
export class CustomerModule { }
