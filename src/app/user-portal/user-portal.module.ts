import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserPortalComponent} from "./user-portal.component";
import {RouterModule, Routes} from "@angular/router";
import {MovieNightModule} from "./movie-night/movie-night.module";

const userPortalRoutes: Routes = [
  {
    path: '', component: UserPortalComponent,
  }
]

@NgModule({
  declarations: [
    UserPortalComponent
  ],
  imports: [
    CommonModule,
    MovieNightModule,
    RouterModule.forChild(userPortalRoutes),
  ]
})
export class UserPortalModule { }
