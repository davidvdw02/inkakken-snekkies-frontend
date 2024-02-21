import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {OnlineEntertainmentComponent} from "./online-entertainment.component";


const entertainmentRoutes: Routes = [
  {
    path: 'id/:id', component: OnlineEntertainmentComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(entertainmentRoutes),
  ]
})
export class OnlineEntertainmentModule { }
