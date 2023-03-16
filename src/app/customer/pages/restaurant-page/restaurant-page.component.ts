import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DefaultService } from 'src/app/shared/default.service';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.css']
})
export class RestaurantPageComponent implements OnInit{
  restaurants!: any;
  baseUrl= 'http://192.168.10.146:8001/'

  constructor(private service: DefaultService, private router: Router){}


  ngOnInit(): void {
  this.getRestaurant(); 
  }

getRestaurant(){
  this.service.getAllRestaurants().subscribe((res)=>{
    this.restaurants= res
  })
}

}
