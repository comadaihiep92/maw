import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BsBookingPageRoutingModule } from './bs-booking-routing.module';

import { BsBookingPage } from './bs-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BsBookingPageRoutingModule
  ],
  declarations: [BsBookingPage]
})
export class BsBookingPageModule {}
