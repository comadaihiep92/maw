import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomePage } from "./home.page";

const routes: Routes = [
  {
    path: "home",
    component: HomePage,
    children: [
      {
        path: "tab1",
        children: [
          {
            path: "",
            loadChildren: "../tab1/tab1.module#Tab1PageModule",
          },
        ],
      },
      // {
      //   path: "waiting",
      //   loadChildren: "../waiting/waiting.module#WaitingPageModule",
      //   redirectTo: "/home/tab2/waiting",
      // },
      // {
      //   path: "sure",
      //   loadChildren: "../waiting/waiting.module#WaitingPageModule",
      //   redirectTo: "/home/tab2/sure",
      // },
      // {
      //   path: "cancel",
      //   loadChildren: "../waiting/waiting.module#WaitingPageModule",
      //   redirectTo: "/home/tab2/cancel",
      // },
      {
        path: "tab2",
        children: [
          {
            path: "",
            loadChildren: "../tab2/tab2.module#Tab2PageModule",
          },
          // {
          //   path: "waiting",
          //   loadChildren: "../waiting/waiting.module#WaitingPageModule",
          // },
          // {
          //   path: "sure",
          //   loadChildren: "../sure/sure.module#SurePageModule",
          // },
          // {
          //   path: "cancel",
          //   loadChildren: "../cancel/cancel.module#CancelPageModule",
          // },
        ],
      },

      {
        path: "tab3",
        children: [
          {
            path: "",
            loadChildren: "../tab3/tab3.module#Tab3PageModule",
          },

          // {
          //   path: "waiting",
          //   loadChildren: "../waiting/waiting.module#WaitingPageModule",
          // },
          // {
          //   path: "sure",
          //   loadChildren: "../sure/sure.module#SurePageModule",
          // },
          // {
          //   path: "cancel",
          //   loadChildren: "../cancel/cancel.module#CancelPageModule",
          // },
        ],
      },
      {
        path: "tab4",
        children: [
          {
            path: "",
            loadChildren: "../tab4/tab4.module#Tab4PageModule",
          },
        ],
      },
      {
        path: "",
        redirectTo: "/home/tab1",
        pathMatch: "full",
      },
    ],
  },
  // { path: "", loadChildren: "./tabs/tabs.module#TabsPageModule" },
  {
    path: "",
    redirectTo: "/home/tab1",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
