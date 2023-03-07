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
      this.defaultService.createMenu(this.addForm.value).subscribe((res)=>{
    alert('success')
    console.log(res)
      })
    }
  }


  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
}

onUpload(event: any) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}

}

