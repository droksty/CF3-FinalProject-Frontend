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
    { text: 'Search by guest name', link: 'reservations/guestName' },
    { text: 'Search between checkin dates', link: 'reservations/checkinBetween' },
    { text: 'Search by checkin date', link: 'reservations/checkIn' },
    { text: 'Search by checkout date', link: 'reservations/checkOut' },
    { text: 'Search by room type', link: 'reservations/roomType' }
  ];

  alerts = this.uiService.alerts;
  constructor(private uiService: UiService) {}
}
