import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import * as $ from 'jquery';
import { FormArray, FormBuilder } from '@angular/forms';
import { OrderserviceService } from 'app/service/orderservice.service';
import { access } from 'fs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  form = {
    contactNumber: null,
    email: null,
    emailCode: null,
    name: null,
    photo: null,
    userAccess: null,
    userAddress: null,
    contryx: null
  };
  Order: FormArray;
 
  constructor(private router: Router,private service: OrderserviceService, private formBuilder: FormBuilder) {
    
  }

  async ngOnInit() {
    this.Order = this.formBuilder.array([]);
    await this.create();
    console.log(this.Order) 
  }

  async create() {
    let x;
    let i;
    await this.service.getOrderCount().then(val => x = val)


    for (i = 0; i < x; i++) {
      await this.service.getOrderi(i).then(async val => {
        
        let contry;
        let contryy;
        if ( val[1].split('#')[2] === 'US') {
          contry = `flag-icon-us`;
          contryy = 'Amarica';
        } else if ( val[1].split('#')[2] === 'AI') {
          contry = `flag-icon-ai`;
          contryy = 'Australia';
        } else if ( val[1].split('#')[2] === 'GB') {
          contry = `flag-icon-gb`;
          contryy = 'England';
        } else if ( val[1].split('#')[2] === 'CA') {
          contry = `flag-icon-ca`;
          contryy = 'Canada';
        } else if ( val[1].split('#')[2] === 'NZ') {
          contry = `flag-icon-nz`;
          contryy = 'New Zeland';
        } else if ( val[1].split('#')[2] === 'RU') {
          contry = `flag-icon-ru`;
          contryy = 'Rusia';
        } else if ( val[1].split('#')[2] === 'SA') {
          contry = `flag-icon-sa`;
          contryy = 'Saudhi';
        } else if ( val[1].split('#')[2] === 'LK') {
          contry = `flag-icon-lk`;
          contryy = 'Sri Lanka';
        }
        
        if (val[5] === '1') {
          await this.Order.push(this.formBuilder.group({
            orderIdCode:val[0],
            orderId: val[1].split('#')[0],
            orderDate: val[1].split('#')[1],
            productId: val[2].split('#')[0],
            productName: val[2].split('#')[2],
            box: val[4],
            packet: val[4] * 20,
            access: val[5],
            startingpro: val[3].split('#')[0],
            factory: val[3].split('#')[1],
            shipment: val[3].split('#')[2],
            mainDistributor: val[3].split('#')[3],
            distributor: val[3].split('#')[4],
            seller: val[3].split('#')[5],
            endcustomer: val[3].split('#')[6],
            rate: val[7],
            contryx: contry,
            contryxx: contryy
          }));
        }
      });
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  isMobile() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };

  oneOrder(OrderId) {
    this.router.navigate(['/oneorder'], { queryParams: { orderId: OrderId }, skipLocationChange: true });
  }




}
