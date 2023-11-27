// shared/product-state.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductStateService {
  private productAdded = false;

  setProductAdded(value: boolean) {
    this.productAdded = value;
  }

  getProductAdded() {
    return this.productAdded;
  }
}
