import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  // { path: 'insert-form', component: InsertFormComponent },
  // { path: 'res-form', component: ResFormComponent },
  // { path: 'res-form/:reference', component: ResFormComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
