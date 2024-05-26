import {ApplicationRef, ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
	selector   : "app-root",
	templateUrl: "./app.component.html",
	styleUrls  : ["./app.component.css"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	title = "rotemx-assignment";
	
	constructor(
		private appRef: ApplicationRef) {
	}
	
	routeActivated() {
		this.appRef.tick();
		console.log("ref ticked");
	}
	
}
