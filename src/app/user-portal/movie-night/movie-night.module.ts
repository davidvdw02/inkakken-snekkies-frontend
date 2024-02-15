import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieNightComponent} from './movie-night.component';
import {MovieNightListComponent} from './movie-night-list/movie-night-list.component';
import {MovieNightItemComponent} from './movie-night-list/movie-night-item/movie-night-item.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { MovieNightFormComponent } from './movie-night-form/movie-night-form.component';

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
    MovieNightFormComponent
  ],
  exports: [
    MovieNightComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(movieNightRoutes)
  ]
})
export class MovieNightModule { }
