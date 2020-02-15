import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import * as $ from 'jquery';
import { FormArray, FormBuilder } from '@angular/forms';
import { OrderserviceService } from 'app/service/orderservice.service';

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
 
  constructor(private service: OrderserviceService, private formBuilder: FormBuilder) {
    this.create();
  }

  ngOnInit() {
    this.Order = this.formBuilder.array([]);
  }

  async create() {
    let x;
    let i;
    await this.service.getOrderCount().then(val => x = val)


    for (i = 0; i < x; i++) {
      await this.service.getOrderi(i).then(val => {
        let contry;
        let contryy;
        if (val[4].split('#')[1] === 'US') {
          contry = `flag-icon-us`;
          contryy = 'Amarica';
        } else if (val[4].split('#')[1] === 'AI') {
          contry = `flag-icon-ai`;
          contryy = 'Australia';
        } else if (val[4].split('#')[1] === 'GB') {
          contry = `flag-icon-gb`;
          contryy = 'England';
        } else if (val[4].split('#')[1] === 'CA') {
          contry = `flag-icon-ca`;
          contryy = 'Canada';
        } else if (val[4].split('#')[1] === 'NZ') {
          contry = `flag-icon-nz`;
          contryy = 'New Zeland';
        } else if (val[4].split('#')[1] === 'RU') {
          contry = `flag-icon-ru`;
          contryy = 'Rusia';
        } else if (val[4].split('#')[1] === 'SA') {
          contry = `flag-icon-sa`;
          contryy = 'Saudhi';
        } else if (val[4].split('#')[1] === 'LK') {
          contry = `flag-icon-lk`;
          contryy = 'Sri Lanka';
        }

        if (val[2].split('#')[2] === '1') {
          this.Order.push(this.formBuilder.group({
            contactNumber: val[3],
            email: val[1],
            emailCode: val[0],
            name: val[2].split('#')[0],
            photo: val[2].split('#')[1],
            userAccess: val[5],
            userAddress: val[4],
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




}
