import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-sorry",
  templateUrl: "./sorry.page.html",
  styleUrls: ["./sorry.page.scss"],
})
export class SorryPage implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async closeModal() {
    await this.modalController.dismiss();
  }
}
