import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { NewServerComponent } from '../servers/new-server/new-server.component';
import { ServersComponent } from '../servers/servers.component';
import { UsersComponent } from '../users/users.component';

const routes: Routes = [
  {path: '', redirectTo: '/servers', pathMatch: 'full'},
  { path: 'servers', component: ServersComponent, children: [
      {path: 'new-server', component: NewServerComponent}
    ]},
  { path: 'users', component: UsersComponent },
  { path: '**', component:  PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingAppRoutingModule { }
