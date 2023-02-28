import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem ,PrimeIcons} from 'primeng/api';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

 constructor(private router: Router){}

  ngOnInit() {
  }

  login(){
    this.router.navigate(['/login'])
  }

  register(){
    this.router.navigate(['/register'])
  }

}
