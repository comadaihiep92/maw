import { Component, OnInit } from "@angular/core";
import { CalendarComponentOptions } from "ion2-calendar";
import { CalendarModalOptions } from "ion2-calendar";
@Component({
  selector: "app-choosedateandtime",
  templateUrl: "./choosedateandtime.page.html",
  styleUrls: ["./choosedateandtime.page.scss"],
})
export class ChoosedateandtimePage implements OnInit {
  date: string;
  type: "string"; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsBasic: CalendarComponentOptions = {
    pickMode: "single",
    color: "primary",
    weekdays: ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"],
  };
  constructor() {}

  onChange($event) {
    console.log($event);
  }

  ngOnInit() {}
}
