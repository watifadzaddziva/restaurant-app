import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DefaultService } from 'src/app/shared/default.service';

@Component({
  selector: 'app-set-food-item',
  templateUrl: './set-food-item.component.html',
  styleUrls: ['./set-food-item.component.css']
})
export class SetFoodItemComponent  implements OnInit{

  displayPosition!: boolean;
  uploadedFiles: any[] = []; 
  position!: string;
  addForm!: FormGroup
  imageUrl:any;
  constructor(private messageService: MessageService,private defaultService: DefaultService,
    private fb: FormBuilder ) {}
  
  ngOnInit(): void {
   
    this.addForm= this.fb.group({
      price: ['', [Validators.required]],
      dishName: ['', [Validators.required]],
      restaurantId: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]],
    })
  }


  submit(){
    if(this.addForm.invalid){
      const dataTosend = this.addForm.value
      const tokenData=JSON.parse(sessionStorage.getItem('user_data') ?? '{}')  
    dataTosend.restaurantId= tokenData.id
      dataTosend.imageUrl= this.imageUrl
      this.defaultService.createMenu(dataTosend).subscribe((res)=>{
        console.log(res)
  this.messageService.add({severity: 'success', summary: 'Saved Successfully', detail: ''});
      },
      err=>{
        this.messageService.add({severity: 'error', summary: 'error while saving data', detail: ''});

      })
    }
  }


  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
}


onUpload(event:any) {
  for(let file of event.files) {
      this.uploadedFiles.push(file);
      console.log(file);
    this.imageUrl = event.originalEvent.body.location;
      
  }

  this.messageService.add({severity: 'success', summary: 'File Uploaded', detail: ''});
}
}

