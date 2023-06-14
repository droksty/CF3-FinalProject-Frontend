import { Component } from '@angular/core';
import { MenuItem } from './app.interfaces';
import { UiService } from './ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finalproject-frontend';

  moreQueries: MenuItem[] = [
    { text: 'Search by Guest Name', link: 'not-implemented-yet'},
    { text: 'Search between check in dates', link: 'not-implemented-yet'},
    { text: 'Search by date booked', link: 'not-implemented-yet'},
    { text: 'Search by check in date', link: 'not-implemented-yet'},
    { text: 'Search by check out date', link: 'not-implemented-yet'},
    { text: 'Search by room type', link: 'not-implemented-yet'}
  ];

  alerts = this.uiService.alerts;
  constructor(private uiService: UiService) {}
}
