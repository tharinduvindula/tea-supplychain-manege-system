import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from 'app/service/productservice.service';
import { ActivatedRoute,Route } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-oneproduct',
  templateUrl: './oneproduct.component.html',
  styleUrls: ['./oneproduct.component.scss']
})
export class OneproductComponent implements OnInit {

  public form = {
    productId: null,
    productName: null,
    photo: null,
    packetType: null,
    flaver: null,
    weight: null,
    price: null,
  };
    item : FormBuilder

  constructor(private router:Router, private service: ProductserviceService, private Activatedroute: ActivatedRoute) { 
    this.getProduct(this.Activatedroute.snapshot.queryParamMap.get('productName'));
  }

  ngOnInit() {
  }
  async getProduct(productName) {
    console.log(productName)
    await this.service.getProduct(productName).then(val => {
      if (val[4] !== '4') {
        this.form.productId = val[1].split('#')[0];
        this.form.productName = val[1].split('#')[1];
        this.form.flaver = val[2].split('#')[0],
        this.form.photo = val[2].split('#')[1],
        this.form.price = val[5],
        this.form.packetType = val[3].split('#')[0],
        this.form.weight = val[3].split('#')[1]
      }
    });
  }

  oneproduct(productName) {
    this.router.navigate(['/oneproduct'], { queryParams: { productName: productName }, skipLocationChange: true });
  }
}
