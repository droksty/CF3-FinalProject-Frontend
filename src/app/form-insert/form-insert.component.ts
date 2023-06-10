import { Component } from '@angular/core';
import { Reservation, datesToString } from '../app.interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationsService } from '../reservations.service';

@Component({
  selector: 'app-form-insert',
  templateUrl: './form-insert.component.html',
  styleUrls: ['./form-insert.component.css']
})
export class FormInsertComponent {

  insertForm: FormGroup;

  constructor(private fb: FormBuilder, private service: ReservationsService) {
    this.insertForm = this.fb.group({
      reference: ['', [Validators.required, Validators.minLength(10)]],
      reservationDate: ['', Validators.required],
      guestName: ['', Validators.required],
      checkIn: ['', Validators.required],
      checkOut: ['', Validators.required],
      roomType: ['', Validators.required],
      totalPrice: ['', Validators.required]
    })
  }

  insertReservation(): void {
    if (this.insertForm.valid) {
      const reservation = this.insertForm.value as Reservation;
      // console.log(reservation)
      
      this.service.insertReservation(datesToString(reservation)).subscribe((response) => {
        console.log(response)
        console.log("inserted")
      });
      this.insertForm.reset();
    } else {
      console.log('Form not valid');
    }
  }
}
