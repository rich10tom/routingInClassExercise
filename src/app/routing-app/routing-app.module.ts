import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingAppRoutingModule } from './routing-app-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RoutingAppRoutingModule
  ],
  exports: [RoutingAppRoutingModule]

})
export class RoutingAppModule { }
