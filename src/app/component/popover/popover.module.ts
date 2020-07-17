import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

// import { PopoverPageRoutingModule } from "./popup-routing.module";
import { PopoverComponent } from "./popover.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [PopoverComponent],
})
export class PopoverModule {}
