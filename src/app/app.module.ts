import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import {RoutingAppModule} from "./routing-app/routing-app.module";
import { NewServerComponent } from './servers/new-server/new-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    UsersComponent,
    NewServerComponent,
    PageNotFoundComponent
  ],
    imports: [
        BrowserModule, RoutingAppModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
