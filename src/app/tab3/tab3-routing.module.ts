import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { Tab3Page } from "./tab3.page";

const routes: Routes = [
  {
    path: "",
    component: Tab3Page,
    children: [
      {
        path: "waiting",
        loadChildren: "../waiting/waiting.module#WaitingPageModule",
      },
      {
        path: "sure",
        loadChildren: "../sure/sure.module#SurePageModule",
      },
      {
        path: "cancel",
        loadChildren: "../cancel/cancel.module#CancelPageModule",
      },
      {
        path: "",
        redirectTo: "/home/tab3/sure",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/home/tab3/sure",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab3PageRoutingModule {}
