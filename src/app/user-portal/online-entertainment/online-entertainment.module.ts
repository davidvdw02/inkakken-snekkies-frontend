import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {OnlineEntertainmentComponent} from "./online-entertainment.component";


const entertainmentRoutes: Routes = [
  {
    path: 'id/:id', component: OnlineEntertainmentComponent,
  }
]

@NgModule({
  declarations: [OnlineEntertainmentComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(entertainmentRoutes),
    ReactiveFormsModule,
  ]
})
export class OnlineEntertainmentModule { }
