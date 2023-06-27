import { Component } from '@angular/core';
import { APIError, Reservation, datesToString } from '../app.interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationsService } from '../reservations.service';
import { UiService } from '../ui.service';


@Component({
  selector: 'app-form-insert',
  templateUrl: './form-insert.component.html',
  styleUrls: ['./form-insert.component.css']
})
export class FormInsertComponent {

  insertForm: FormGroup;

  constructor(private fb: FormBuilder, private uiService: UiService, private service: ReservationsService) {
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

      this.service.insertReservation(datesToString(reservation)).subscribe({
        next: () => {
          this.uiService.newAlert({ 
            type: 'success', 
            heading: 'Success: ', 
            text: 'Reservation inserted!' 
          })
        },
        error: error => {
          let errorMsg = Object.entries<APIError>(error)[7][1].message
          this.uiService.newAlert({ 
            type: 'danger', 
            heading: 'Error: ', 
            text: `${errorMsg}` 
          })
        }
      })
    } else {
      console.log('Form not valid');
      this.uiService.newAlert({ 
        type: 'danger', 
        heading: 'Error: ', 
        text: `Invalid form data. Please fill all fields appropriately.` 
      })
    }
  }
}
