import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { LoginPage } from "../app/login/login.page";
import { SplashPage } from "../app/splash/splash.page";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  rootPage: any = LoginPage;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private modalController: ModalController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      // this.splashScreen.show();
      // let splash: any = this.modalController.create({ component: SplashPage });
      // splash.present();
    });
  }
}
