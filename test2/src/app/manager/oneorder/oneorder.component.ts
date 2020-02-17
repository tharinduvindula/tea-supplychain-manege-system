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
       if (val[4] !== '4') {
        this.form.orderIdCode = val[0];
        this.form.orderId = val[1].split('#')[0];
        this.form.orderDate = val[1].split('#')[1];
        this.form.productId = val[2].split('#')[0];
        this.form.productName = val[2].split('#')[2];
        this.form.box = val[4];
        this.form.packet = val[4] * 20;
        this.form.access = val[5];
        this.form.startingpro = val[3].split('#')[0];
        this.form.factory = val[3].split('#')[1];
        this.form.shipment = val[3].split('#')[2];
        this.form.mainDistributor = val[3].split('#')[3];
        this.form.distributor = val[3].split('#')[4];
        this.form.seller = val[3].split('#')[5];
        this.form.endcustomer = val[3].split('#')[6];
        this.form.rate = val[7];
        this.form.contryx = contry;
        this.form.contryxx = contryy;
      }
    });
  }

  getBox(){

  }

  getPacket() {

  }

  down1() {
    const printContents = document.getElementById('print-section1').innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    
    window.location.reload();
  }
  down2() {
    const printContents = document.getElementById('print-section2').innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    
    window.location.reload();
  }


}
