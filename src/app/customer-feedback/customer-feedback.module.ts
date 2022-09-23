import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerFeedbackPageRoutingModule } from './customer-feedback-routing.module';

import { CustomerFeedbackPage } from './customer-feedback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerFeedbackPageRoutingModule
  ],
  declarations: [CustomerFeedbackPage]
})
export class CustomerFeedbackPageModule {}
