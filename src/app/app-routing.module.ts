import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {AdminPortalComponent} from "./admin-portal/admin-portal.component";

const routes: Routes = [
  {
    path: 'user', loadChildren: () => import('./user-portal/user-portal.module')
      .then((m) => m.UserPortalModule)
  },
  {
    path: 'admin', component: AdminPortalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
