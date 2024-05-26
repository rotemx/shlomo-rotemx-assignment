import {ApplicationRef, Component} from "@angular/core";
import {ProductStore}              from "./store/product.store";

@Component({
	selector   : "app-root",
	templateUrl: "./app.component.html",
	styleUrls  : ["./app.component.css"]
})
export class AppComponent {
	
	constructor(
		public store: ProductStore,
		private appRef: ApplicationRef) {
	}
	
	title = "rotemx-assignment";
	routeActivated() {
		this.appRef.tick();
		console.log('ref ticked');
	}
	
}

