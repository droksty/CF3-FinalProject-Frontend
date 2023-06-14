import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationsService } from '../reservations.service';
import { APIError, Reservation } from '../app.interfaces';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(private fb: FormBuilder, private alertService: UiService, private router: ActivatedRoute, private service: ReservationsService) {
  
  }

  ngOnInit(): void {
    this.router.params.subscribe(x => this.reference = x['reference'])
    this.service.findReservation(this.reference).subscribe( (dataFromAPI) => {
      this.reservation = dataFromAPI;
      console.log(this.reservation)
    })
  }

  updateReservation() {
    // console.log(this.reservation)
    this.service.updateReservation(this.reservation).subscribe({
      next: data => {
        console.log(data);
        this.alertService.newAlert({ type: 'success', heading: 'Success: ', text: 'Reservation updated!' })
      },
      error: error => {
        let errorMessage = Object.entries<APIError>(error)[7][1].message;
        this.alertService.newAlert({ type: 'danger', heading: 'Error: ', text: `${errorMessage}` })
      }
    })
  }

  deleteReservation() {
    // console.log(this.reservation)
    this.service.deleteReservation(this.reservation.id).subscribe({
      next: response => {
        console.log(response);
        this.alertService.newAlert({ type: 'success', heading: 'Success: ', text: 'Reservation deleted!' })
      },
      error: error => {
        let str = Object.entries<string>(error)[7][1]
        console.log(str);
        console.log(typeof str);
        let sttrrr = str.slice(12, str.length-2)
        
        
        
        // let errorMessage = Object.entries<APIError>(error)[7][1].message;
        this.alertService.newAlert({ type: 'danger', heading: 'Error: ', text: `${sttrrr}` })
      }
    })
  }
}
