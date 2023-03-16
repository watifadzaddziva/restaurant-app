import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { DefaultService } from 'src/app/shared/default.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  uploadedFiles: any[] = [];
  msgs!: Message[];
  restaurantForm!: FormGroup;
  // baseUrl= 'http://192.168.10.146:8100/restaurant/upload';
imageUrl:any;

  constructor(private messageService: MessageService,
    private router: Router,private defaultService :DefaultService,private fb : FormBuilder) {}
  
  ngOnInit(): void {
    this.restaurantForm= this.fb.group({
      name: ['', [Validators.required]],
      logoUrl: ['', [Validators.required]],
      restaurantUserId: ['', [Validators.required]],
      contactDetails:['', [Validators.required]], 
      address:['', [Validators.required]],

    })
  }


submit(){
  if(this.restaurantForm.invalid){
    console.log(this.restaurantForm.value); 
    const dataTosend= this.restaurantForm.value
    const tokenData=JSON.parse(sessionStorage.getItem('user_data') ?? '{}')  
    dataTosend.restaurantUserId= tokenData.user.restaurant.id
    dataTosend.logoUrl= this.imageUrl
    this.defaultService.createRestaurant(dataTosend).subscribe((res)=>{
      console.log(res);
      let userData: {};
        userData= res
        sessionStorage.setItem('user_data', JSON.stringify((userData)))
      this.messageService.add({severity: 'success', summary: 'Saved Successfully', detail: ''});
      this.router.navigate(['home/home'])
        },
        err=>{
          this.messageService.add({severity: 'error', summary: 'error while saving data', detail: ''});
 
        } )
      }
}


  onUpload(event:any) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
        console.log(file);
      this.imageUrl = event.originalEvent.body.location;
      console.log(this.imageUrl)
        
    }
    this.messageService.add({severity: 'success', summary: 'File Uploaded', detail: ''});
}

}
