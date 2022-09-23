import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddOutletPageRoutingModule } from './add-outlet-routing.module';

import { AddOutletPage } from './add-outlet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddOutletPageRoutingModule
  ],
  declarations: [AddOutletPage]
})
export class AddOutletPageModule {}
