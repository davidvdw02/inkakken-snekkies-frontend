import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntertainmentComponent } from '../entertainment/entertainment.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const entertainmentRoutes: Routes = [
  {
    path: 'id/:id', component: EntertainmentComponent
  }
]

@NgModule({
  declarations: [
    EntertainmentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(entertainmentRoutes),
    FormsModule
  ]
})
export class EntertainmentModule { }
