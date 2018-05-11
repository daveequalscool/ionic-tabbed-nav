import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommonNounPage } from './common-noun';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
	declarations: [
		CommonNounPage,
	],
	imports: [
		IonicPageModule.forChild(CommonNounPage),
		ComponentsModule,
	],
	entryComponents: [
		CommonNounPage,
	],
})
export class CommonNounPageModule {}
