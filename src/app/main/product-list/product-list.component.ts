import {ChangeDetectionStrategy, Component} from "@angular/core";
import {item, ProductStore}                 from "../../store/product.store";

@Component({
	selector   : "app-product-list",
	templateUrl: "./product-list.component.html",
	changeDetection: ChangeDetectionStrategy.OnPush
	
})
export class ProductListComponent {
	
	constructor(public store:ProductStore) {
	}
	
	addToCart(product: item) {
		this.store.addToCart(product);
	}
	
	removeFromCart(product: item) {
		this.store.removeFromCart(product);
	}
}
