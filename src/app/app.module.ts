import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './DashBoard/dashboard/dashboard.component';
import { BoxofficeComponent } from './boxoffice/boxoffice.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BoxofficeComponent,
    ContactComponent,
    AdminComponent,
    PageNotFoundComponent,
    MovieDetailsComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
