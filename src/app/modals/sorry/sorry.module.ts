import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SorryPageRoutingModule } from "./sorry-routing.module";

import { SorryPage } from "./sorry.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SorryPageRoutingModule],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  declarations: [SorryPage],
})
export class SorryPageModule {}
