import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AccountPageRoutingModule } from "./account-routing.module";

import { AccountPage } from "./account.page";
import { NO_ERRORS_SCHEMA } from "@angular/compiler";
import { CalendarModule } from "ion2-calendar";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountPageRoutingModule,
    CalendarModule,
    CalendarModule.forRoot({
      doneLabel: "Save",
      closeIcon: true,
    }),
  ],
  declarations: [AccountPage],
  schemas: [],
})
export class AccountPageModule {}
