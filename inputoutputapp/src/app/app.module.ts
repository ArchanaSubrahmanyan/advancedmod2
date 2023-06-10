import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

import { ProductComponent } from './product/product.component';
import { ListComponent } from './list/list.component';
import { IncrementComponent } from './increment/increment.component';
import { AgreeComponent } from './agree/agree.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    
    ProductComponent,
         ListComponent,
         IncrementComponent,
         AgreeComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
