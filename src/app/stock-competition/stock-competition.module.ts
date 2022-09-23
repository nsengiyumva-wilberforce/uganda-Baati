import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockCompetitionPageRoutingModule } from './stock-competition-routing.module';

import { StockCompetitionPage } from './stock-competition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockCompetitionPageRoutingModule
  ],
  declarations: [StockCompetitionPage]
})
export class StockCompetitionPageModule {}
