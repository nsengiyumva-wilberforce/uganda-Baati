import { OrderDetailComponent } from './order-detail/order-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddOrderComponent } from './add-order/add-order.component';
import { DetailComponent } from './detail/detail.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { HttpClientModule } from '@angular/common/http';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [AppComponent, DetailComponent, AddOrderComponent, OrderDetailComponent],
  imports: [BrowserModule, IonicModule.forRoot(), 
    AppRoutingModule, HttpClientModule, FormsModule,ReactiveFormsModule, 
    RouterModule,
    NgApexchartsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
