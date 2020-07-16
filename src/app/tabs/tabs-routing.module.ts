import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "waiting",
        children: [
          {
            path: "",
            loadChildren: "../waiting/waiting.module#WaitingPageModule",
          },
        ],
      },
      {
        path: "sure",
        children: [
          {
            path: "",
            loadChildren: "../sure/sure.module#SurePageModule",
          },
        ],
      },
      {
        path: "cancel",
        children: [
          {
            path: "",
            loadChildren: "../cancel/cancel.module#CancelPageModule",
          },
        ],
      },

      {
        path: "",
        redirectTo: "/tabs/waiting",
        pathMatch: "full",
      },
    ],
  },

  // { path: "", loadChildren: "./tabs/tabs.module#TabsPageModule" },
  {
    path: "",
    redirectTo: "/tabs/waiting",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
