import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
})
export class HomePage {

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public loadingCtrl: LoadingController
	) {
	}

	goToRestaurant(){
		let loading = this.loadingCtrl.create({
			content: "Loading..."
		});

		loading.present().then(() => {
			
			setTimeout(() => {
				this.navCtrl.setRoot("RestaurantPage").then(() => {
					loading.dismiss();
				})
			}, 500);
		});

	}

}
