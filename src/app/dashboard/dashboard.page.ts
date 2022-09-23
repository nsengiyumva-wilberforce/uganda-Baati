import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {


  constructor(
     ) { }

  async ngOnInit() {

    const formData = new FormData();

    formData.append('name', "wilberforce")
    console.log(formData)
    
  }


}
