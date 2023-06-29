import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.css']
})
export class ListFilterComponent {
  public queryType: string = '';
  guestNameFilter: FormGroup;
  datesBetweenFilter: FormGroup;
  checkInFilter: FormGroup;
  checkOutFilter: FormGroup;
  roomTypeFilter: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.guestNameFilter = this.fb.group({
      guestName: ['', Validators.required]
    })
    this.datesBetweenFilter = this.fb.group({
      checkInFrom: ['', Validators.required],
      checkInTo: ['', Validators.required]
    })
    this.checkInFilter = this.fb.group({
      checkIn: ['', Validators.required]
    })
    this.checkOutFilter = this.fb.group({
      checkOut: ['', Validators.required]
    })
    this.roomTypeFilter = this.fb.group({
      roomType: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.queryType = this.router.url;
  }

  filterByGuestName() {
    this.router.navigate(
      ['/reservations/filterByGuestName/'],
      {queryParams: {guestName: this.guestNameFilter.value.guestName}}
    )
  }

  filterByDatesBetween() {
    this.router.navigate(
      ['/reservations/filterByDatesBetween/'],
      {queryParams: {
        checkInFrom: this.datesBetweenFilter.value.checkInFrom, 
        checkInTo: this.datesBetweenFilter.value.checkInTo
      }}
    )
  }

  filterByCheckIn() {
    this.router.navigate(
      ['/reservations/filterByCheckIn/'],
      {queryParams: {
        checkIn: this.checkInFilter.value.checkIn
      }}
    )
  }

  filterByCheckOut() {
    this.router.navigate(
      ['/reservations/filterByCheckOut/'],
      {queryParams: {
        checkOut: this.checkOutFilter.value.checkOut
      }}
    )
  }

  filterByRoomType() {
    this.router.navigate(
      ['/reservations/filterByRoomType/'],
      {queryParams: {
        roomType: this.roomTypeFilter.value.roomType
      }}
    )
  }
}
