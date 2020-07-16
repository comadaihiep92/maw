import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "splash",
    loadChildren: () =>
      import("./splash/splash.module").then((m) => m.SplashPageModule),
  },
  // {
  //   path: "home",
  //   loadChildren: () =>
  //     import("./home/home.module").then((m) => m.HomePageModule),
  // },

  // default
  // {
  //   path: "",
  //   redirectTo: "login",
  //   pathMatch: "full",
  // },
  // {
  //   path: "",
  //   redirectTo: "home",
  //   pathMatch: "full",
  // },
  {
    path: "",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginPageModule),
  },

  // {
  //   path: "login",
  //   loadChildren: () =>
  //     import("./login/login.module").then((m) => m.LoginPageModule),
  // },

  {
    path: "reg",
    loadChildren: () => import("./reg/reg.module").then((m) => m.RegPageModule),
  },
  // {
  //   path: "tabs",
  //   loadChildren: () =>
  //     import("./tabs/tabs.module").then((m) => m.TabsPageModule),
  // },
  { path: "", loadChildren: "./tabs/tabs.module#TabsPageModule" },
  { path: "", loadChildren: "./home/home.module#HomePageModule" },
  {
    path: "business",
    loadChildren: () =>
      import("./business/business.module").then((m) => m.BusinessPageModule),
  },
  {
    path: "bs-booking",
    loadChildren: () =>
      import("./bs-booking/bs-booking.module").then(
        (m) => m.BsBookingPageModule
      ),
  },
  {
    path: "choosedateandtime",
    loadChildren: () =>
      import("./choosedateandtime/choosedateandtime.module").then(
        (m) => m.ChoosedateandtimePageModule
      ),
  },
  {
    path: "verify",
    loadChildren: () =>
      import("./verify/verify.module").then((m) => m.VerifyPageModule),
  },
  {
    path: "otp",
    loadChildren: () => import("./otp/otp.module").then((m) => m.OtpPageModule),
  },
  {
    path: "confirm",
    loadChildren: () =>
      import("./confirm/confirm.module").then((m) => m.ConfirmPageModule),
  },
  {
    path: "popup",
    loadChildren: () =>
      import("./modals/popup/popup.module").then((m) => m.PopupPageModule),
  },

  {
    path: "sorry",
    loadChildren: () =>
      import("./modals/sorry/sorry.module").then((m) => m.SorryPageModule),
  },
  {
    path: "account",
    loadChildren: () =>
      import("./account/account.module").then((m) => m.AccountPageModule),
  },
  // {
  //   path: "tab1",
  //   loadChildren: () =>
  //     import("./tab1/tab1.module").then((m) => m.Tab1PageModule),
  // },
  // {
  //   path: "tab2",
  //   loadChildren: () =>
  //     import("./tab2/tab2.module").then((m) => m.Tab2PageModule),
  // },
  // {
  //   path: "tab3",
  //   loadChildren: () =>
  //     import("./tab3/tab3.module").then((m) => m.Tab3PageModule),
  // },
  // {
  //   path: "tab4",
  //   loadChildren: () =>
  //     import("./tab4/tab4.module").then((m) => m.Tab4PageModule),
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
