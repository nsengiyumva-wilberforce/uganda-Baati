import { OrderDetailComponent } from './../order-detail/order-detail.component';
import { OutletsService } from './../services/outlets.service';
import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs/internal/Observable';
import { Order } from '../add-order/order.model';
import { Outlet } from '../welcome/outlet.model';
import { ApexAxisChartSeries, ApexChart } from 'ng-apexcharts';

export type ChartOptions = {
  chart: ApexChart,
  series: ApexAxisChartSeries | any[]
}
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public options:Partial<ChartOptions>
@Input() outlet: Outlet;
type = 'invoice';
orders$: Observable<Order[]>;

  constructor(
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private outletsService: OutletsService
  ) {
    this.spackline()
   }

  async ngOnInit() {
    this.spackline()
  }

  spackline(){
    this.options = {
      chart: {
        type:'area',
        height: 100
      },
      series: [
        {
          data:[12,14,2,47,32,44,14,55,41,69]
        }
      ]
    }
  }
  
  segmentChanged(ev: any) {
    this.spackline()
  }
  closeModal(){
    this.modalCtrl.dismiss();
  }

  async openDetailModal(outlet: Outlet){
    const modal = await this.modalCtrl.create({
      component: OrderDetailComponent,
      componentProps: {outlet}
    });

    modal.present()
  }


}
