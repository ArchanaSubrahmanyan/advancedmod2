import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Input()parentData1!:string;
  @Input()parentData2!:string;
  @Input()parentData3!:string;

  @Output()
  public submitdata= new EventEmitter<string>();
  submit(){
    this.submitdata.emit("Successfully submitted") ;
  }
}
