import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TabbedNavComponent } from './tabbed-nav/tabbed-nav';
import { NounNavComponent } from './noun-nav/noun-nav';

@NgModule({
	declarations: [
		TabbedNavComponent,
		NounNavComponent,
	],
	imports: [
		IonicModule,
	],
	exports: [
		TabbedNavComponent,
		NounNavComponent,
	]
})

export class ComponentsModule {}
