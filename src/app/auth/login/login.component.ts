import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup

  constructor(private fb : FormBuilder,private router: Router,
    private authService : AuthService){}

  ngOnInit(): void {
    this.loginForm= this.fb.group({
      userName:['',[Validators.required]],
      password: ['', Validators.required]
    })
  }


  submitForm(){
    if (this.loginForm.valid) {
      this.authService.loginUserFromServer(this.loginForm.value).subscribe((res)=>{
        this.router.navigate(['/home'])

        
      })
      
    } else {
      Object.values(this.loginForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}
