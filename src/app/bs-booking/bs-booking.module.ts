import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { BsBookingPageRoutingModule } from "./bs-booking-routing.module";

import { BsBookingPage } from "./bs-booking.page";

// import { PopupPage } from "../modals/popup/popup.page";
// import { SorryPage } from "../modals/sorry/sorry.page";
import { PopupPageModule } from "../modals/popup/popup.module";
import { SorryPageModule } from "../modals/sorry/sorry.module";
import { from } from "rxjs";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BsBookingPageRoutingModule,
    // PopupPage,
    // SorryPage,
    PopupPageModule,
    SorryPageModule,
  ],
  declarations: [BsBookingPage], //, PopupPage, SorryPage
  entryComponents: [PopupPageModule, SorryPageModule],
  // exports: [PopupPage, SorryPage],
})
export class BsBookingPageModule {}
