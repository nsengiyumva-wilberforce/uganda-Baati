import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RouteSchedulesPageRoutingModule } from './route-schedules-routing.module';

import { RouteSchedulesPage } from './route-schedules.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouteSchedulesPageRoutingModule
  ],
  declarations: [RouteSchedulesPage]
})
export class RouteSchedulesPageModule {}
