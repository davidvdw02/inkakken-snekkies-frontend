import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieNightComponent } from './movie-night.component';
import { MovieNightListComponent } from './movie-night-list/movie-night-list.component';
import { MovieNightItemComponent } from './movie-night-list/movie-night-item/movie-night-item.component';



@NgModule({
  declarations: [
    MovieNightComponent,
    MovieNightListComponent,
    MovieNightItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MovieNightModule { }
