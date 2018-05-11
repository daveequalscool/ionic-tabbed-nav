import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProperNounPage } from './proper-noun';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
	declarations: [
		ProperNounPage,
	],
	imports: [
		IonicPageModule.forChild(ProperNounPage),
		ComponentsModule,
	],
	entryComponents: [
		ProperNounPage,
	],
})
export class ProperNounPageModule {}
