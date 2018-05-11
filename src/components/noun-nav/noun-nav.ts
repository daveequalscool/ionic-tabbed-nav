import { Component } from '@angular/core';
import { TabbedNavComponent } from '../tabbed-nav/tabbed-nav';

@Component({
	selector: 'noun-nav',
	templateUrl: '../tabbed-nav/tabbed-nav.html'
})

export class NounNavComponent extends TabbedNavComponent {

	public pages = [{
		title: 'Common',
		id: 'common',
		component: 'CommonNounPage',
	}, {
		title: 'Proper',
		id: 'proper',
		component: 'ProperNounPage',
	}];

}
