import { Component  } from '@angular/core';
import { computed } from 'mobx-angular';
import {ProductStore}                       from "../../store/product.store";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
    constructor(public store: ProductStore) {
    }

  @computed get total() {
   return this.store.cart.reduce(
      (total, item) => total + (item.count * item.price),
      0
    );
  }
}
