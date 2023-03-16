import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantPageComponent } from './pages/restaurant-page/restaurant-page.component';

const routes: Routes = [
  {path : '', component: RestaurantPageComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
