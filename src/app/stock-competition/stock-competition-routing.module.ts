import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockCompetitionPage } from './stock-competition.page';

const routes: Routes = [
  {
    path: '',
    component: StockCompetitionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockCompetitionPageRoutingModule {}
