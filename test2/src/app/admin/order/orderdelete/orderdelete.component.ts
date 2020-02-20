import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderserviceService } from 'app/service/orderservice.service';

@Component({
  selector: 'app-orderdelete',
  templateUrl: './orderdelete.component.html',
  styleUrls: ['./orderdelete.component.scss']
})
export class OrderdeleteComponent implements OnInit {

  Orders: FormArray;

  constructor(private router: Router, private service: OrderserviceService, private formBuilder: FormBuilder) {

  }

  async ngOnInit() {
    this.Orders = this.formBuilder.array([]);
    await this.create();
    console.log(this.Orders)
  }

  async create() {
    let x;
    let i;
    await this.service.getOrderCount().then(val => x = val)


    for (i = 0; i < x; i++) {
      await this.service.getOrderi(i).then(async val => {
        console.log(val)
        let contry;
        let contryy;
        if (val[1].split('#')[2] === 'US') {
          contry = `flag-icon-us`;
          contryy = 'America';
        } else if (val[1].split('#')[2] === 'AI') {
          contry = `flag-icon-ai`;
          contryy = 'Australia';
        } else if (val[1].split('#')[2] === 'GB') {
          contry = `flag-icon-gb`;
          contryy = 'England';
        } else if (val[1].split('#')[2] === 'CA') {
          contry = `flag-icon-ca`;
          contryy = 'Canada';
        } else if (val[1].split('#')[2] === 'NZ') {
          contry = `flag-icon-nz`;
          contryy = 'New Zeland';
        } else if (val[1].split('#')[2] === 'RU') {
          contry = `flag-icon-ru`;
          contryy = 'Rusia';
        } else if (val[1].split('#')[2] === 'SA') {
          contry = `flag-icon-sa`;
          contryy = 'Saudhi';
        } else if (val[1].split('#')[2] === 'LK') {
          contry = `flag-icon-lk`;
          contryy = 'Sri Lanka';
        }

        if (val[5] === '1' && val[3].split('#')[0] === 'No') {
          await this.Orders.push(this.formBuilder.group({
            orderIdCode: val[0],
            orderId: val[1].split('#')[0],
            orderDate: val[1].split('#')[1],
            orderIdi: val[1],
            productName: val[2].split('#')[1],
            box: val[4],
            startingpro: val[3].split('#')[0],
            contryx: contry,
            contryxx: contryy
          }));
        }
      });
    }
  }

  async ondelete(event, email) {
    event.preventDefault();
    await this.service.deleteOrder(email).then(
      data => {
        if (data != null) {
          console.log(data)
        }

      },
      error => {
        // this.handleError(error)
        if (error != null) {
          console.log(error)
        }
      }

    );
    this.Orders = null;
    this.Orders = this.formBuilder.array([]);
    this.create();
  }

}
