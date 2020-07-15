import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoosedateandtimePage } from './choosedateandtime.page';

const routes: Routes = [
  {
    path: '',
    component: ChoosedateandtimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoosedateandtimePageRoutingModule {}
