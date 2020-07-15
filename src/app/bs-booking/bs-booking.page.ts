import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { PopupPage } from "../modals/popup/popup.page";
import { SorryPage } from "../modals/sorry/sorry.page";

@Component({
  selector: "app-bs-booking",
  templateUrl: "./bs-booking.page.html",
  styleUrls: ["./bs-booking.page.scss"],
})
export class BsBookingPage implements OnInit {
  constructor(private modalController: ModalController) {}

  async openModal() {
    const modal = await this.modalController.create({
      component: PopupPage,
      cssClass: "myPopup",
    });
    return await modal.present();
  }

  async openSorry() {
    const modal = await this.modalController.create({
      component: SorryPage,
      showBackdrop: false,
      cssClass: "mySorry",
    });
    return await modal.present();
  }

  ngOnInit() {}
}
