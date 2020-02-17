import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductserviceService } from 'app/service/productservice.service';
import { DatePipe } from '@angular/common';
import { OrderserviceService } from 'app/service/orderservice.service';
import { PacketserviceService } from 'app/service/packetservice.service';
import { BoxserviceService } from 'app/service/boxservice.service';
// import { BoxserviceService } from 'app/service/boxservice.service';

@Component({
  selector: 'app-orderadd',
  templateUrl: './orderadd.component.html',
  styleUrls: ['./orderadd.component.scss']
})
export class OrderaddComponent implements OnInit {
  product = [];
  error;
  @ViewChild('ordereaddForm') formValues;
  form = {
    orderId: null,
    productName : null,
    qun: null,
    contry: null,
    date: this.datePipe.transform(new Date(), 'yyyy/MM/dd')

  }
  constructor(private productservice: ProductserviceService,
    private service: OrderserviceService,
    private packetService: PacketserviceService,
    private boxService: BoxserviceService,
    private datePipe: DatePipe) {

  }

  async ngOnInit() {
    let i;
    let x
    await this.productservice.getProductCount().then(val => x = val)
    for (i = 0; i < x; i++) {
      await this.productservice.getProducti(i).then(val => {
        console.log(val[1])
        this.product.push(val[1]);
      });
    }
  }

  async onsubmit() {

    console.log(this.form)
    const orderName = this.form.orderId + '#' + this.form.date + '#' + this.form.contry;
    const progress = 'No#' + this.form.qun * 20 + '#0#0#0#0#0#0';
    await this.service.insertOrder(orderName, progress, this.form.qun, this.form.productName).then(
      async data => {
        if (data != null) {
          console.log(data);
          await this.productAdd(this.form.qun, orderName)
          this.formValues.resetForm();
        }

      },
      error => {
        this.handleError(error)
        if (error != null) {
          console.log(error)
        }
      }

    );

  }

  productAdd(x,_orderId) {
    let y = 0;
    let boxId;
    let packetId;

    this.boxService.getLastBox().then(val1 => {
      console.log(val1);
      if (this.datePipe.transform(new Date(), 'yyyyMMdd') === val1.split('#')[0]){
        boxId = +val1.split('#')[1];
      } else {
        boxId = 0;
      }
      
      this.packetService.getLastPacket().then(async val2 => {
        console.log(val2);
        if (this.datePipe.transform(new Date(), 'yyyyMMdd') === val1.split('#')[0]) {
        packetId = +val2.split('#')[1];
        } else {
          packetId = 0;
        }

        for (let index = 0; index < x; index++) {
          boxId++;
          let tempboxId = this.datePipe.transform(new Date(), 'yyyyMMdd') + '#' + (boxId)
          await this.boxService.insertBox(tempboxId, _orderId)
          console.log('box' + index)
          if (index === 0) {
            await this.boxService.insertOrder(_orderId, x)
            console.log("boxo")
          }

          for (let index2 = 0; index2 < 20; index2++) {
            packetId++;
            let temppacketId = this.datePipe.transform(new Date(), 'yyyyMMdd') + '#' + (packetId);
            await this.packetService.insertPacket(temppacketId, _orderId, tempboxId)
            console.log('packet' + index2)
            if (index === 0 && index2 === 0) {
              await this.packetService.insertOrder(_orderId, x * 20);
              console.log('packeto')
            }

          }

        }
      });
    });
    
    console.log(boxId)
    console.log(packetId)

    
    console.log(x)
    console.log(y)
  }


  handleError(error) {
    this.error = error.error.error;
  }


}
