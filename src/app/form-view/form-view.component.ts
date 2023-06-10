import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationsService } from '../reservations.service';
import { Reservation } from '../app.interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css']
})
export class FormViewComponent {

  reservation!: Reservation
  viewForm!: FormGroup;
  reference: string = ''

  constructor(private fb: FormBuilder, private router: ActivatedRoute, private service: ReservationsService) {
  
  }

  ngOnInit(): void {
    this.router.params.subscribe(x => this.reference = x['reference'])
    this.service.findReservation(this.reference).subscribe( (dataFromAPI) => {
      this.reservation = dataFromAPI;
      console.log(this.reservation)
    })
  }

  updateReservation() {
    console.log("click")
    console.log(this.reservation)
    this.service.updateReservation(this.reservation).subscribe((response) => {
      console.log(response);
      console.log('updated');
    })
  }

  deleteReservation() {
    console.log("Deleting")
    console.log(this.reservation)
    // this.service.deleteReservation(this.reservation.id).subscribe((response) => {
    //   console.log(response)
    //   console.log('deleted');
    // })
  }
}
