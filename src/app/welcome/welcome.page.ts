import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs/internal/Observable';
import { OutletsService } from '../services/outlets.service';
import { Outlet } from './outlet.model';
import { tap } from 'rxjs/operators';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  outlets$: Observable<Outlet[]>;

  constructor(
    private outletsService: OutletsService,
     private loadingCtrl: LoadingController,
     private modalCtrl: ModalController
     ) { }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading'
    });
    loading.present();
    this.outlets$ = this.outletsService.getOutlets().pipe(
      tap(outlets=>{
        loading.dismiss()
        return outlets;
      })
    )
  }

  async openDetailModal(outlet: Outlet){
    const modal = await this.modalCtrl.create({
      component: DetailComponent,
      componentProps: {outlet}
    });

    modal.present()
  }

}
