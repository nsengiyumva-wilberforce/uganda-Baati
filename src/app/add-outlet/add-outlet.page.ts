import { LoadingController } from '@ionic/angular';
import { OutletsService } from './../services/outlets.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-outlet',
  templateUrl: './add-outlet.page.html',
  styleUrls: ['./add-outlet.page.scss'],
})
export class AddOutletPage implements OnInit {
  form:FormGroup;
  constructor(
    private outletsService: OutletsService,
    private loadingCtrl: LoadingController,
    private router: Router
    ) { }

  ngOnInit() {
    this.form = new FormGroup({
      outlet_name: new FormControl(null,[Validators.required]),
      phone_number: new FormControl(null,[Validators.required]),
      contact_personnel: new FormControl(null,[Validators.required]),
      distributor_name: new FormControl(null,[Validators.required]),
    });
  }

  async submitOutlet(){
    const loading = await this.loadingCtrl.create({
      message: 'Loading'
    });

    loading.present();
    this.outletsService.addOutlet(this.form.value).pipe(
      take(1)
    ).subscribe(()=>{
      this.router.navigateByUrl('/welcome');
      loading.dismiss()
    })
  }
}
