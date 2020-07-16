import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurePage } from './sure.page';

const routes: Routes = [
  {
    path: '',
    component: SurePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurePageRoutingModule {}
