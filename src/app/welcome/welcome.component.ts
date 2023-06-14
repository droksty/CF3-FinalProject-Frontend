import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UiService } from '../ui.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  
  searchForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private uiService: UiService) {
    this.searchForm = this.fb.group({
      reference: ['', Validators.required]
    })
  }

  findOneByReference() {
    if (this.searchForm.valid) {
      this.router.navigate(['/form-view/' + this.searchForm.value.reference])
    } else {
      this.uiService.newAlert({ type: 'warning', heading: 'Alert: ', text: 'Reference cannot be empty' });
    }
  }
}
