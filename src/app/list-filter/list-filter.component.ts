import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
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

  constructor(private router: Router, private fb: FormBuilder) {
    this.guestNameFilter = this.fb.group({
      guestName: ['', Validators.required]
    })
    this.datesBetweenFilter = this.fb.group({
      checkInFrom: ['', Validators.required],
      checkInTo: ['', Validators.required]
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
}
