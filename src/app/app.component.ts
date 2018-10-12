import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
	templateUrl: 'app.html',
	selector: 'page-app',
})
export class MyApp {
	rootPage: any = 'LoginPage';
	@ViewChild(Nav) nav: Nav;

	public pages: any = [
		{
			icon: 'ios-home-outline',
			name: 'Discover Foods',
			page: 'HomePage'
		},
		{
			icon: 'ios-search',
			name: 'Search',
			page: 'HomePage'
		},
		{
			icon: 'ios-heart-outline',
			name: 'My Favorite Foods',
			page: 'HomePage'
		},
		{
			icon: 'ios-home-outline',
			name: 'Food Near Me',
			page: 'HomePage'
		},
		{
			icon: 'ios-log-in',
			name: 'Log In',
			page: 'LoginPage'
		}
	];

	constructor(
		platform: Platform,
		statusBar: StatusBar,
		splashScreen: SplashScreen,
	) {
		platform.ready().then(() => {
			statusBar.backgroundColorByHexString("#C42C3B");
			splashScreen.hide();
		});
	}

	goToPage(p) {
		this.nav.setRoot(p.page);
	}
}