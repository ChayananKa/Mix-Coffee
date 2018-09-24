// import { PaymentPage } from './../pages/payment/payment';
// import { HistoryPage } from './../pages/history/history';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { RadioPage } from '../pages/radio/radio';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = HomePage;
  // rootPage:any = HistoryPage;
  // rootPage:any = PaymentPage;
  rootPage:any = RadioPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

