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
  totalSales = 0;

  ngOnInit(): void {
    this.service.findAll().subscribe({
      next: (data) => {
        this.reservationList = Object.assign(data)
        for (let res of this.reservationList) {
          this.totalSales += res.totalPrice;
        }
      },
      error: (error) => { 
        console.log(error) 
      }
    });
  }
}
