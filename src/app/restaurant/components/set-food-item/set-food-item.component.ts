import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-set-food-item',
  templateUrl: './set-food-item.component.html',
  styleUrls: ['./set-food-item.component.css']
})
export class SetFoodItemComponent {

  displayPosition!: boolean;
  uploadedFiles: any[] = []; 
  position!: string;
addForm!: FormGroup
  items!:[
    {label:'available', value:'available'},
    {label:'unavailable', value:'unavailable'},

  ];
  option = [
    {name: 'Unavailable'},
    {name: 'Available'},
    
];

  constructor(private messageService: MessageService, ) {}

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

export class City{

}