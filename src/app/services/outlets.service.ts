import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../add-order/order.model';
import { Outlet } from '../welcome/outlet.model';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';


@Injectable({
  providedIn: 'root'
})
export class OutletsService {
  //apiUrl = 'http://127.0.0.1:8000/api';
apiUrl = 'https://ugandabaatiapi.herokuapp.com/api';
  constructor(private http: HttpClient) { }

  getOutlets():Observable<Outlet[]>{
    return this.http.get<Outlet[]>(`${this.apiUrl}/outlets`);
  }
  addOutlet(outlet:Outlet):Observable<Outlet>{
    return this.http.post<Outlet>(`${this.apiUrl}/outlets`,outlet)
  }
  getOrders():Observable<Order[]>{
    return this.http.get<Order[]>(`${this.apiUrl}/orders`);
  }
  addOrder(order:any):Observable<Order>{
    const headers = new HttpHeaders();
    return this.http.post<Order>(`${this.apiUrl}/orders`,order, {
      headers: headers
    })
  }

  async takePicture(){
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    const response = await fetch(image.webPath!);
    const blob = await response.blob();
    return blob;
  }


}
