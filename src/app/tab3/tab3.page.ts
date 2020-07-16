import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from "ion2-calendar";
import { CalendarModalOptions } from "ion2-calendar";
@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
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

  ngOnInit() {
  }

}
