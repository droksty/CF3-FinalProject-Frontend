import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormInsertComponent } from './form-insert/form-insert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormViewComponent } from './form-view/form-view.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ListViewComponent } from './list-view/list-view.component';
import { AlertComponent } from './alert/alert.component';
import { ListFilterComponent } from './list-filter/list-filter.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'insert-form', component: FormInsertComponent },
  { path: 'form-view', component: FormViewComponent },
  { path: 'form-view/:reference', component: FormViewComponent },
  { path: 'reservations', component: ListViewComponent },
  { path: 'reservations/filterByGuestName', component: ListViewComponent },
  { path: 'reservations/filterByDatesBetween', component: ListViewComponent },
  { path: 'reservations/filterByCheckIn', component: ListViewComponent },
  { path: 'reservations/filterByCheckOut', component: ListViewComponent },
  { path: 'reservations/filterByRoomType', component: ListViewComponent },
  { path: 'reservations/guestName', component: ListFilterComponent },
  { path: 'reservations/checkinBetween', component: ListFilterComponent },
  { path: 'reservations/checkIn', component: ListFilterComponent },
  { path: 'reservations/checkOut', component: ListFilterComponent },
  { path: 'reservations/roomType', component: ListFilterComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    FormInsertComponent,
    FormViewComponent,
    DropdownComponent,
    ListViewComponent,
    AlertComponent,
    ListFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
