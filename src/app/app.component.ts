import { Component } from '@angular/core';
import { MenuItem } from './app.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finalproject-frontend';

  moreQueries: MenuItem[] = [
    { text: 'Search between check in dates', link: 'not-implemented-yet'},
    { text: 'Search by date booked', link: 'not-implemented-yet'},
    { text: 'Search by check in date', link: 'not-implemented-yet'},
    { text: 'Search by check out date', link: 'not-implemented-yet'},
    { text: 'Search by room type', link: 'not-implemented-yet'}
  ];
}
