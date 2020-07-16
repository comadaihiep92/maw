import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurePageRoutingModule } from './sure-routing.module';

import { SurePage } from './sure.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurePageRoutingModule
  ],
  declarations: [SurePage]
})
export class SurePageModule {}
