import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserPortalComponent} from "./user-portal.component";
import {RouterModule, Routes} from "@angular/router";
import {MovieNightModule} from "./movie-night/movie-night.module";
import { OnlineRecipeComponent } from './online-recipe/online-recipe.component';

const userPortalRoutes: Routes = [
  {
    path: '', component: UserPortalComponent,
  },
  {
    path: 'movienight', loadChildren: () => import('./movie-night/movie-night.module')
      .then((m) => m.MovieNightModule)
  },
  {
    path: 'onlinerecipe', component: OnlineRecipeComponent,
  },
]

@NgModule({
  declarations: [
    UserPortalComponent,
  ],
  imports: [
    CommonModule,
    MovieNightModule,
    RouterModule.forChild(userPortalRoutes),
  ]
})
export class UserPortalModule { }
