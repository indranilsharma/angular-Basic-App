import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGurd } from './auth-gurd.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';


// apply nested route
const appRoute: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent,
  children: [
    {path: ':id/:name', component: UserComponent}
  ]
},
  {path: 'servers',
  // canActivate: [AuthGurd],
   canActivateChild: [AuthGurd],
   component: ServersComponent,
   children: [
   {path: ':id', component: ServerComponent},
   {path: ':id/edit', component: EditServerComponent,
   canDeactivate: [CanDeactivateGuard]}
    ]
  },
  {path: 'not-found', component: PageNotFoundComponent},
  // wildcart use every other
  {path: '**', redirectTo: '/not-found'},
];

@NgModule({
imports: [
  RouterModule.forRoot(appRoute)
],
exports: [RouterModule]
})
export class AppRoutingModule {

}
