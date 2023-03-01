import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DefaultService } from 'src/app/shared/default.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  uploadedFiles: any[] = [];
  restaurantForm!: FormGroup

  constructor(private messageService: MessageService,
    private router: Router,private defaultService :DefaultService,private fb : FormBuilder) {}
  
  ngOnInit(): void {
    this.restaurantForm= this.fb.group({
      name: ['', [Validators.required]],
      logoUrl: ['', [Validators.required]],
      restaurantId: ['', [Validators.required]],
      address: ['', [Validators.required]],
      contactDetails: ['', [Validators.required]]

    })
  }


submit(){
  this.defaultService.createRestaurant(this.restaurantForm.value).subscribe((res)=>{
console.log(res)
  })
}

    onUpload(event: any) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }

    }

}
