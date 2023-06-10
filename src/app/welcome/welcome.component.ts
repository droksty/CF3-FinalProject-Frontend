import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservationsService } from '../reservations.service';
import { Reservation } from '../app.interfaces';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  
  searchForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private service: ReservationsService) {
    this.searchForm = this.fb.group({
      reference: ['', Validators.required]
    })
  }

  findOneByReference() {
    if (this.searchForm.valid) {
      // console.log(this.searchForm.value.reference)
      this.router.navigate(['/form-view/' + this.searchForm.value.reference])
    } else {
      console.log("not valid")
    }
    
    // this.searchForm.reset();
  }

  findManyByGuestName() {
    console.log("not impl yet")
  }
}
