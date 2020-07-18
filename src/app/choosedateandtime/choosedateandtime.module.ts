import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ChoosedateandtimePageRoutingModule } from "./choosedateandtime-routing.module";

import { ChoosedateandtimePage } from "./choosedateandtime.page";

import { CalendarModule } from "ion2-calendar";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoosedateandtimePageRoutingModule,
    CalendarModule,
  ],
  declarations: [ChoosedateandtimePage],
})
export class ChoosedateandtimePageModule {}
