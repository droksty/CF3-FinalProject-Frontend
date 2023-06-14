import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationsService } from '../reservations.service';
import { APIError, Reservation } from '../app.interfaces';
import { FormGroup } from '@angular/forms';
import { UiService } from '../ui.service';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css']
})
export class FormViewComponent {

  reservation!: Reservation
  viewForm!: FormGroup;
  reference: string = ''

  constructor(private uiService: UiService, private router: ActivatedRoute, private service: ReservationsService) {}

  ngOnInit(): void {
    this.router.params.subscribe(x => this.reference = x['reference'])
    this.service.findReservation(this.reference).subscribe( (data) => {
      this.reservation = data;
    })
  }

  
  updateReservation() {
    this.service.updateReservation(this.reservation).subscribe({
      next: () => {
        this.uiService.newAlert({ 
          type: 'success',
          heading: 'Success: ', 
          text: 'Reservation updated!' 
        })
      },
      error: error => {
        let errorMessage = Object.entries<APIError>(error)[7][1].message;
        this.uiService.newAlert({ 
          type: 'danger', 
          heading: 'Error: ', 
          text: `${errorMessage}` })
      }
    })
  }


  deleteReservation() {
    this.service.deleteReservation(this.reservation.id).subscribe({
      next: () => {
        this.uiService.newAlert({ 
          type: 'success', 
          heading: 'Success: ', 
          text: 'Reservation deleted!' })
      },
      error: error => {
        let errString = Object.entries<string>(error)[7][1]
        this.uiService.newAlert({ 
          type: 'danger', 
          heading: 'Error: ', 
          text: `${errString.slice(12, errString.length-2)}` 
        })
      }
    })
  }

}
