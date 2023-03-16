import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { WelcomeComponent } from './auth/welcome/welcome.component';

const routes: Routes = [
  {path : '', redirectTo: '/welcome', pathMatch:'full'},
  {path : 'welcome', component:WelcomeComponent},
  {path: 'login', component:LoginComponent},
  {path : 'register', component:RegisterComponent},
  {path: 'customer', loadChildren:()=>import ('./customer/customer.module').then(m=>m.CustomerModule)},
  {path : 'home', loadChildren:()=>import ('./restaurant/restaurant.module').then(m=>m.RestaurantModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
