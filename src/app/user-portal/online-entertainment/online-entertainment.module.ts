import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {OnlineEntertainmentComponent} from "./online-entertainment.component";
import { MovieListComponent } from './online-entertainment-item/movie-list/movie-list.component';
import { OnlineEntertainmentItemComponent } from './online-entertainment-item/online-entertainment-item.component';
import { SerieListComponent } from './online-entertainment-item/serie-list/serie-list.component';


const onlineEntertainmentRoutes: Routes = [
  {
    path: 'id/:id', component: OnlineEntertainmentComponent,
  }
]

@NgModule({
  declarations: [OnlineEntertainmentComponent, MovieListComponent, SerieListComponent, OnlineEntertainmentItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(onlineEntertainmentRoutes),
    ReactiveFormsModule,
  ]
})
export class OnlineEntertainmentModule { }
