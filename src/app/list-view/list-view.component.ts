import { Component } from '@angular/core';
import { ReservationsService } from '../reservations.service';
import { Reservation, ReservationList } from '../app.interfaces';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent {
  reservationList: Reservation[] = [];
  totalSales = 0;
  listFilter = '';
  guestName = '';
  checkInFrom = '';
  checkInTo = '';
  checkIn = '';
  checkOut = '';
  roomType = '';


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: ReservationsService) { }

  ngOnInit(): void {
    this.listFilter = this.router.url
    
    if (this.listFilter.includes("GuestName")) {
      this.findByGuestName();
    } else if (this.listFilter.includes("Between")) {
      this.findByDatesBetween();
    } else if (this.listFilter.includes("CheckIn")) {
      this.findByCheckIn();
    } else if (this.listFilter.includes("CheckOut")) {
      this.findByCheckOut();
    } else if (this.listFilter.includes("roomType")) {
      this.findByRoomType();
    } else {
      this.findAll();
    }
  }

  findAll() {
    this.service.findAll().subscribe({
      next: (data) => this.generateList(data),
      error: (error) => console.log(error) 
    });
  }

  findByGuestName() {
    this.activatedRoute.queryParams.subscribe(x => this.guestName = x['guestName'])
    this.service.findAllByGuestName(this.guestName).subscribe({
      next: (data) => this.generateList(data),
      error: (error) => console.log(error) 
    });
  }

  findByDatesBetween() {
    this.activatedRoute.queryParams.subscribe(x => {
      this.checkInFrom = x['checkInFrom'];
      this.checkInTo = x['checkInTo'];
    })
    this.service.findAllByDatesBetween(this.checkInFrom, this.checkInTo).subscribe({
      next: (data) => this.generateList(data),
      error: (error) => console.log(error) 
    })
  }

  findByCheckIn() {
    this.activatedRoute.queryParams.subscribe(x => {
      this.checkIn = x['checkIn'];
    })
    this.service.findAllByCheckIn(this.checkIn).subscribe({
      next: (data) => this.generateList(data),
      error: (error) => console.log(error) 
    })
  }

  findByCheckOut() {
    this.activatedRoute.queryParams.subscribe(x => {
      this.checkOut = x['checkOut'];
    })
    this.service.findAllByCheckOut(this.checkOut).subscribe({
      next: (data) => this.generateList(data),
      error: (error) => console.log(error) 
    })
  }

  findByRoomType() {
    this.activatedRoute.queryParams.subscribe(x => {
      this.roomType = x['roomType'];
    })
    this.service.findAllByRoomType(this.roomType).subscribe({
      next: (data) => this.generateList(data),
      error: (error) => console.log(error) 
    })
  }

  generateList(data: ReservationList) {
    this.reservationList = Object.assign(data);
    for (let reservation of this.reservationList) {
      this.totalSales += reservation.totalPrice;
    }
  }
}
