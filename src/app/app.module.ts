import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserPortalModule} from "./user-portal/user-portal.module";
import {AdminPortalModule} from "./admin-portal/admin-portal.module";
import { OnlineRecipeModule } from './user-portal/online-recipe/online-recipe.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UserPortalModule,
    AdminPortalModule,
    BrowserModule,
    AppRoutingModule,
    OnlineRecipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
