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

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'insert-form', component: FormInsertComponent },
  { path: 'form-view', component: FormViewComponent },
  { path: 'form-view/:reference', component: FormViewComponent },
  { path: 'reservations', component: ListViewComponent },
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
    AlertComponent
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
