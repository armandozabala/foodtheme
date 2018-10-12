import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public loadingCtrl: LoadingController
	) {

	}

	gotToHome(){
		
		let loading = this.loadingCtrl.create({
			content: "Waiting for authentication"
		});

		loading.present().then(() => {
			
			setTimeout(() => {
				this.navCtrl.setRoot("HomePage").then(() => {
					loading.dismiss();
				})
			}, 1500);
		});
	}

}
