import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'tabbed-nav',
	templateUrl: 'tabbed-nav.html'
})

export class TabbedNavComponent {

	@Input() currentPage: string;

	public pages = [];

	constructor(
		public navCtrl: NavController,
	) {
	}

	openPage(page) {
		this.navCtrl.setRoot(page);
	}

}
