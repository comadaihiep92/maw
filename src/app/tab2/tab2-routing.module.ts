import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { Tab2Page } from "./tab2.page";

const routes: Routes = [
  {
    path: "",
    component: Tab2Page,
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
        redirectTo: "/home/tab2/waiting",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/home/tab2/waiting",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab2PageRoutingModule {}
