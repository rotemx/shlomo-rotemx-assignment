import { observable, action } from 'mobx-angular';

export interface item {
  name: string;
  price: number;
  count: number;
}
export class ProductStore {
  @observable products = [
    { name: 'Tomato', price: 1, count: 0 },
    { name: 'Cucumber', price: 2, count: 0 },
  ];

  @observable cart:item[] = [];

  @action addToCart(product: item) {
    const item = this.cart.find((p:item) => p.name === product.name);
    if (item) {
      item.count++;
    } else {
      this.cart.push({ ...product, count: 1 });
    }
    console.log(
      `${product.name} added. Count: ${item ? item.count : 1}, Price: ${
        product.price
      }`
    );
  }

  @action removeFromCart(product:item) {
    const item = this.cart.find((p) => p.name === product.name);
    if (item) {
      item.count--;
      if (item.count === 0) {
        this.cart = this.cart.filter((p) => p.name !== product.name);
      }
      console.log(
        `${product.name} removed. Count: ${item.count}, Price: ${product.price}`
      );
    }
  }
}

export const productStore = new ProductStore();
