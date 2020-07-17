import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen";

@Component({
  selector: "app-splash",
  templateUrl: "./splash.page.html",
  styleUrls: ["./splash.page.scss"],
})
export class SplashPage implements OnInit {
  constructor(
    private modalController: ModalController // private splashScreen: SplashScreen
  ) {}

  ngOnInit() {
    // this.splashScreen.hide();
    // setTimeout(() => {
    //   this.modalController.dismiss();
    // }, 3000);
  }

  ionViewDidEnter() {
    // this.splashScreen.hide();
    // setTimeout(() => {
    //   this.modalController.dismiss();
    // }, 3000);
  }
}
