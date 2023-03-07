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
  restaurantForm!: FormGroup;
  baseUrl= 'http://192.168.10.146:8100/restaurant/upload';

  constructor(private messageService: MessageService,
    private router: Router,private defaultService :DefaultService,private fb : FormBuilder) {}
  
  ngOnInit(): void {
    this.restaurantForm= this.fb.group({
      name: ['', [Validators.required]],
      logoUrl: ['', [Validators.required]],
      restaurantId: ['', [Validators.required]],
      contactDetails:['', [Validators.required]], 
      address:['', [Validators.required]],

    })
  }


submit(){
  if(this.restaurantForm.invalid){
    this.defaultService.createRestaurant(this.restaurantForm.value).subscribe((res)=>{
      console.log(res)
      this.router.navigate(['home'])
        },
        err=>{
         this.showError();
        } )
      }
}

    onUpload(e: any) {
      if (e.type == 'success' && e.file.status == 'done')
      if (e.file.response)
        this.restaurantForm.value.logoUrl = {
          ...this.restaurantForm.value.logoUrl ,
          productImageId: e.file.response.id,
          success: true,
          logoUrl: e.file.response.location
        };
      else this.restaurantForm.value.logoUrl  = { ...this.restaurantForm.value.logoUrl , success: false };
  }

  myUploader(event: any) {
    console.log("onUpload() START");
    for(let file of event.files) {
      console.log("FILE TO BE UPLOADED: ", file);
      this.uploadedFiles.push(file);
    }
  }


  showError() {
    this.messageService.add({severity:'error', summary: 'Error', detail: 'Message Content'});
}
}
