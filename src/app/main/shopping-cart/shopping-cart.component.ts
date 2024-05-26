import {ChangeDetectionStrategy, Component} from "@angular/core";
import {ProductStore}                       from "../../store/product.store";

@Component({
	selector       : "app-shopping-cart",
	templateUrl    : "./shopping-cart.component.html",
	changeDetection: ChangeDetectionStrategy.OnPush
	
})
export class ShoppingCartComponent {
	
	constructor(public store: ProductStore) {
	}
	
	
}
