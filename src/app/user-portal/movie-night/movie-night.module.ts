import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {MovieNightComponent} from './movie-night.component';
import {MovieNightListComponent} from './movie-night-list/movie-night-list.component';
import {MovieNightItemComponent} from './movie-night-list/movie-night-item/movie-night-item.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { MovieNightFormComponent } from './movie-night-form/movie-night-form.component';
import {FormsModule} from "@angular/forms";
import { AddAttendeePopupComponent } from './movie-night-form/add-attendee-popup/add-attendee-popup.component';
import {MatDialogModule} from "@angular/material/dialog";


const movieNightRoutes: Routes = [
  {
    path: '', component: MovieNightComponent
  },
  {
    path: 'id/:id', component: MovieNightFormComponent
  }
]

@NgModule({
  declarations: [
    MovieNightComponent,
    MovieNightListComponent,
    MovieNightItemComponent,
    MovieNightFormComponent,
    AddAttendeePopupComponent
  ],
  exports: [
    MovieNightComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(movieNightRoutes),
    FormsModule,
    MatDialogModule
  ],
  providers: [
    DatePipe
  ]
})
export class MovieNightModule { }
