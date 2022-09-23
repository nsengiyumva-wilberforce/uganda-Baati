import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddOutletPage } from './add-outlet.page';

const routes: Routes = [
  {
    path: '',
    component: AddOutletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddOutletPageRoutingModule {}
