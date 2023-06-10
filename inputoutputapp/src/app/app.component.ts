import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inputoutputapp';
  Name ="";
  Phone="";
  dob="";
  parentData1="";
  parentData2="";
  parentData3="";

  proid="";
  proname="";
  prodesc="";
  parentId="";
  parentName="";
  parentDesc="";

  items=['item1','item2'];
  viewDetails()
  {
    this.parentData1=this.Name;
    this.parentData2=this.Phone;
    this.parentData3=this.dob;
  }
  value="";
  submitdata(value:string){
    this.value=value;
  }

  displayTable(){

    this.parentId=this.proid;
    this.parentName=this.proname;
    this.parentDesc=this.prodesc;
  }


  value1="";
  tabledata(value1:string){
    this.value1=value1;
  }

  addItem(newItem:string){
    this.items.push(newItem);
  }
  
  counter=5
  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }
  agreed = 0;
  disagreed = 0;
  voters = ['bheem', 'chutki', 'raju'];

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
}
