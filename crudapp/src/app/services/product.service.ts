import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from '../model/Product';
import {Observable} from 'rxjs';






@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseurl = "http://localhost:8093//product/api.2.0/retrieve";
  constructor(private http : HttpClient) { }
  getProducts(){
    return this.http.get<Product[]>("http://localhost:8093//product/api.2.0/retrieve/all");
    
    }
    saveProduct(product:Product):Observable<Object>{
      return this.http.post("http://localhost:8093//product/api.2.0/create",product);
    }
    getProductById(id:number):Observable<Product>{
      return this.http.get<Product>(`${this.baseurl}/${id}`);
    }
    deleteProductById(id:number){
      return this.http.delete(`http://localhost:8093//product/api.2.0/delete/${id}`);
    }
  updateProduct(product:Product){
      return this.http.put(`http://localhost:8093//product/api.2.0/update`,product);
    }
}


  

