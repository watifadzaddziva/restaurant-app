import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registration!: FormGroup

  constructor(private fb : FormBuilder,private router: Router,
    private messageService: MessageService,
    private authService : AuthService){}

  ngOnInit(): void {
    this.registration= this.fb.group({
      name:['', [Validators.required]] ,
      lastname:['', [Validators.required]] ,
      username:['', [Validators.required]]  ,
      email:['', [Validators.required]]  ,
      password:['', [Validators.required]]  ,
      // confirmPassword:['', [Validators.required,,this.confirmationValidator]] ,
      usertype:['', [Validators.required]] ,
  
     })
  }

  submitForm(){
    console.log(this.registration.value)
    if (this.registration.valid) {
      this.authService.registerUserFromServer(this.registration.value).subscribe((res)=>{
        console.log(this.registration.value)
        this.messageService.add({severity: 'success', summary: 'registered successfully', detail: ''});
        this.router.navigate(['/login'])   
      },err=>{
        this.messageService.add({severity: 'error', summary: 'error while saving', detail: ''});

      })
      
    }
 
    }

    updateConfirmValidator(): void {
      /** wait for refresh value */
      Promise.resolve().then(() => this.registration.controls['confirmPassword'].updateValueAndValidity());
    }
  
  
    confirmationValidator = (control: UntypedFormControl): { [s: string]: boolean } => {
      if (!control.value) {
        return { required: true };
      } else if (control.value !== this.registration.controls['password'].value) {
        return { confirm: true, error: true };
      }
      return {};
    };

}
