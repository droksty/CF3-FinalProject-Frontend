import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.css']
})
export class ListFilterComponent {
  public filter: string = '';
  constructor(private router: Router) {}

  ngOnInit() {
    this.filter = this.router.url;
  }
}
