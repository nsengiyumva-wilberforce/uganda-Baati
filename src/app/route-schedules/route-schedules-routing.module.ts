import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteSchedulesPage } from './route-schedules.page';

const routes: Routes = [
  {
    path: '',
    component: RouteSchedulesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouteSchedulesPageRoutingModule {}
