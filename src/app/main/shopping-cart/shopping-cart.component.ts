import { Component } from '@angular/core';
import { productStore } from '../../store/product.store';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
})
export class ShoppingCartComponent {
  store = productStore;
}
