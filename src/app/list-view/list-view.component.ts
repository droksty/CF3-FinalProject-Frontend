import { Component } from '@angular/core';
import { ReservationsService } from '../reservations.service';
import { Reservation, ReservationList, datesToString } from '../app.interfaces';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent {
  constructor(private service: ReservationsService) {}
  reservationList: Reservation[] = [];
  leTotal = 0;

  ngOnInit(): void {
    console.log('Starting API call')
    this.service.findAll().subscribe({
      next: (data) => {
        this.reservationList = Object.assign(data)
        console.log(this.reservationList)
        for (let res of this.reservationList) {
          this.leTotal += res.totalPrice;
        }
      },
      error: (error) => { console.log(error) },
      complete: () => { console.log('API call completed') }
    });
  }
}
