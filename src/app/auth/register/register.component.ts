import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registration!: FormGroup

  constructor(private fb : FormBuilder,private router: Router,
    private authService : AuthService){}


  ngOnInit(): void {
  this.registration= this.fb.group({
    firstName:['', [Validators.required]] ,
    lastName:['', [Validators.required]] ,
    userName:['', [Validators.required]] ,
    email:['', [Validators.required]] ,
    password:['', [Validators.required]] ,
    confirmPassword:['', [Validators.required]] ,
    usertype:['', [Validators.required]] ,

   })
  }

  submitForm(){
    if (this.registration.valid) {
      this.authService.registerUserFromServer(this.registration.value).subscribe((res)=>{
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
