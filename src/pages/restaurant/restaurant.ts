import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-restaurant',
	templateUrl: 'restaurant.html',
})
export class RestaurantPage {

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
	) {
	}

	gotToHome(){		
		this.navCtrl.setRoot("HomePage");
	}

}
