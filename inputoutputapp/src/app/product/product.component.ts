import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() parentId!:string;
  @Input() parentName!:string;
  @Input() parentDesc!:string;
  
  @Output()
  public tabledata=new EventEmitter<string>();
  onsubmit(){

    this.tabledata.emit("table successfully created");
  }
}
