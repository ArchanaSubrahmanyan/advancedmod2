import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public listdata = new EventEmitter<string>();

  addItem(value:string){
    this.listdata.emit(value);
  }
}
