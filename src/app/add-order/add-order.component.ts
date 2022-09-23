import { Router } from '@angular/router';
import { OutletsService } from './../services/outlets.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Outlet } from '../welcome/outlet.model';
import { take } from 'rxjs/operators';
import {Location} from '@angular/common';
import { Geolocation } from '@capacitor/geolocation';


@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss'],
})
export class AddOrderComponent implements OnInit {
  @Input() outlet: Outlet;
  order: FormGroup;
  image_path: string;
  files:any;
  latituede:any;
  longitude:any;
  constructor(
    private modalCtrl: ModalController, 
    private outletsService: OutletsService,
    private loadingCtrl: LoadingController,
    private router: Router,
    private location: Location
    ) { }

  ngOnInit() {
    Geolocation.getCurrentPosition().then((data) => {
      this.latituede=data.coords.latitude;
      this.longitude=data.coords.longitude
  });
    //form controls for the order form
    this.order = new FormGroup({
      quantity: new FormControl(null, [Validators.required]),
      competition_quantity: new FormControl(null, [Validators.required]),
      delivery_date: new FormControl(null, [Validators.required]),
      remarks: new FormControl(null, [Validators.required]),
      outlet_name: new FormControl(this.outlet.outlet_name),
      image: new FormControl(null)
    })
  }

//close the modal
  closeModal(){
    this.modalCtrl.dismiss();
  }

  //take the picture
  addPhotoToGallery() {
//take the photo and convert it to blob
    this.outletsService.takePicture().then((data)=>{
      this.files=data
    })    
  }

  async submitOrder(){
    //create the order form with the image
    const formData = new FormData();
    formData.append('quantity', this.order.value.quantity)
    formData.append('competition_quantity', this.order.value.competition_quantity)
    formData.append('delivery_date', this.order.value.delivery_date)
    formData.append('remarks', this.order.value.remarks)
    formData.append('outlet_name', this.order.value.outlet_name)
    formData.append('quantity', this.order.value.quantity)
    formData.append('latitude', this.latituede)
    formData.append('longitude', this.longitude)
    formData.append("image", this.files, this.files.filepath)
    console.log("form added")
    const loading = await this.loadingCtrl.create({
      message: 'Loading'
    });

    loading.present();
    this.outletsService.addOrder(formData).pipe(
      take(1)
    ).subscribe(()=>{
      loading.dismiss()
    })
    window.location.href="/welcome"
  }

}
