import { OutletsService } from './../services/outlets.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Order } from '../add-order/order.model';
import { tap } from 'rxjs/operators';
import { Outlet } from '../welcome/outlet.model';
import { AddOrderComponent } from '../add-order/add-order.component';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {
  orders$: Observable<Order[]>;
  @Input() outlet: Outlet;
  constructor(
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private outletsService: OutletsService,
  ) { }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading'
    });
    loading.present();
    this.orders$ = this.outletsService.getOrders().pipe(
      tap(orders=>{
        console.log(orders)
        loading.dismiss()
        return orders;
      })
    )
  }

  async openDetailModal(outlet: Outlet){
    const modal = await this.modalCtrl.create({
      component: AddOrderComponent,
      componentProps: {outlet}
    });

    modal.present()
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

}
