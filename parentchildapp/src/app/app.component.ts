import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentchildapp';
  enterName="Archana";
  parentData="";
  enterAge= "22";
  age="";

  transferData(){
    this.parentData=this.enterName;
  }
  transferAge(){
    this.age = this.enterAge;
  }

  value="";
  sendData(value:string){
    this.value=value;
  }

  
  
}
