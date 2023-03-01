import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // registration= new FormGroup({})

  constructor(private fb : FormBuilder,private router: Router,
    private authService : AuthService){}

    registration= new FormGroup({
      name:new FormControl(''),
      lastname:new FormControl('') ,
      username:new FormControl('') ,
      email:new FormControl('') ,
      password:new FormControl('') ,
      // confirmPassword:['', [Validators.required]] ,
      userType:new FormControl('') ,
  
     })
  
  ngOnInit(): void {
  }

  submitForm(){
    console.log(this.registration.value)
    if (this.registration.valid) {
      this.authService.registerUserFromServer(this.registration.value).subscribe((res)=>{
        console.log(this.registration.value)
        this.router.navigate(['/login'])   
      })
      
    } else {
      Object.values(this.registration.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}
