import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderserviceService } from 'app/service/orderservice.service';

@Component({
  selector: 'app-oneorder',
  templateUrl: './oneorder.component.html',
  styleUrls: ['./oneorder.component.scss']
})
export class OneorderComponent implements OnInit {

  href;

  public form = {
    orderIdCode: null,
    orderId: null,
    orderDate: null,
    productId: null,
    productName: null,
    box: null,
    packet: null,
    access: null,
    startingpro: null,
    factory: null,
    shipment: null,
    mainDistributor: null,
    distributor: null,
    seller: null,
    endcustomer: null,
    rate: null,
    contryx: null,
    contryxx: null
  }

  constructor(private router: Router, private service: OrderserviceService, private Activatedroute: ActivatedRoute) {
    this.getOrder(this.Activatedroute.snapshot.queryParamMap.get('orderId'));
  }

  ngOnInit() {
  }

  isMobile() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };

  async getOrder(OrderId) {
    console.log(OrderId)
    await this.service.getOrder(OrderId).then(val => {
      console.log(val)
  //     if (val[4] !== '4') {
  //       this.form.orderIdCode: val[0]
  // this.form.orderId: val[1].split('#')[0]
  // this.form.orderDate: val[1].split('#')[1]
  // this.form.productId: val[2].split('#')[0]
  // this.form.productName: val[2].split('#')[2]
  // box: val[4]
  // this.form.packet: val[4] * 20
  // this.form.access: val[5],
  // this.form.startingpro: val[3].split('#')[0],
  // this.form.factory: val[3].split('#')[1],
  // shipment: val[3].split('#')[2],
  // mainDistributor: val[3].split('#')[3],
  // distributor: val[3].split('#')[4],
  // seller: val[3].split('#')[5],
  // endcustomer: val[3].split('#')[6],
  // rate: val[7],
  // contryx: contry,
  // contryxx: contryy
  //     }
    });
  }

  down1() {
    let printContents = document.getElementById('print-section1').innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    
    window.location.reload();
  }
  down2() {
    let printContents = document.getElementById('print-section2').innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    
    window.location.reload();
  }


}
