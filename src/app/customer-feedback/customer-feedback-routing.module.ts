import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerFeedbackPage } from './customer-feedback.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerFeedbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerFeedbackPageRoutingModule {}
