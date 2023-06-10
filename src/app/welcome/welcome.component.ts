import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  
  searchForm: FormGroup;
  
  constructor(private router: Router, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      reference: ['', Validators.required]
    })
  }

  findOneByReference() {
    if (this.searchForm.valid) {
      // console.log(this.searchForm.value.reference)
      this.router.navigate(['/res-form/' + this.searchForm.value.reference])
    } else {
      console.log("not valid")
    }
    
    // this.searchForm.reset();
  }
}
