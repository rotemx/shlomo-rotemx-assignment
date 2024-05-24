
import { Component } from '@angular/core';
import { item, productStore } from '../../store/product.store';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  store = productStore;
  selectedProducts!: item;

  addToCart(product:item) {
    this.store.addToCart(product);
  }

  removeFromCart(product: item) {
    this.store.removeFromCart(product);
  }
}
