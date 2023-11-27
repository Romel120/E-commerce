// product-list.component.ts

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  addToCart(product: any) {
    // Implement logic to add product to cart
    console.log('Product added to cart:', product);
  }

  navigateToProductForm() {
    console.log('Navigating to product form...');
    this.router.navigate(['/product-form']);
  }
  handleSuccessfulAddition() {
    console.log('Product added successfully!');
    // You can add any additional logic here if needed
    // For example, you might want to re-fetch the products after addition
    this.fetchProducts();
    // Navigate back to the product list
    this.router.navigate(['/product-list']);
  }
}
