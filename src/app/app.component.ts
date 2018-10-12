import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
	templateUrl: 'app.html',
	selector: 'page-app',
})
export class MyApp {
	rootPage: any = 'HomePage';

	constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
		platform.ready().then(() => {
			statusBar.backgroundColorByHexString("#C42C3B");
			splashScreen.hide();
		});
	}
}