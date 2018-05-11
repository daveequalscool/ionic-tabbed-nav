import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CommonNounPage } from '../pages/common-noun/common-noun';
import { CommonNounPageModule } from '../pages/common-noun/common-noun.module';
import { ProperNounPage } from '../pages/proper-noun/proper-noun';
import { ProperNounPageModule } from '../pages/proper-noun/proper-noun.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
	declarations: [
		MyApp,
	],
	imports: [
		BrowserModule,
		CommonNounPageModule,
		ProperNounPageModule,
		ComponentsModule,
		IonicModule.forRoot(MyApp, {}, {
			links: [{
				component: CommonNounPage,
				name: 'CommonNounPage',
				segment: 'nouns/common',
			}, {
				component: ProperNounPage,
				name: 'ProperNounPage',
				segment: 'nouns/proper',
			}]
		}),
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		CommonNounPage,
	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler}
	]
})
export class AppModule {}
