// product-form.component.ts

import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {
  // Add properties for form data
  name: string = '';  // Add properties for each form field
  description: string = '';
  price: number = 0;
  productListComponent: any;

  constructor(private productService: ProductService) {}

  onSubmit() {
    const productData = {
      name: this.name,
      description: this.description,
      price: this.price,
    };
  
    this.productService.addProduct(productData).subscribe(
      (response) => {
        console.log('Product added successfully:', response);
        // Call the method in the ProductListComponent to handle the successful addition
        this.productListComponent.handleSuccessfulAddition();
      },
      (error) => {
        console.error('Error adding product:', error);
      }
    );
  }
}