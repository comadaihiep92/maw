import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BsBookingPage } from './bs-booking.page';

const routes: Routes = [
  {
    path: '',
    component: BsBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BsBookingPageRoutingModule {}
