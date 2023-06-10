import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  productId: number = 0;
  product: any;

  ngOnInit(): void {
    
  }
  constructor(private productService:ProductService){

  }
  deleteById():void{
    this.productService.deleteProductById(this.productId).subscribe(
      (response) => {
        console.log('deleted successfully');
      },
      (error) => {
        console.log('Error deleting the product:', error);
      }
    );
  }
}
