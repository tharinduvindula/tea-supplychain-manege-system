import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ProductserviceService } from 'app/service/productservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  pho = 'https://i.ibb.co/fNwMyzz/mmp6178-edited.jpg'

  items: FormArray;

  constructor(private service: ProductserviceService, private router:Router, private formBuilder: FormBuilder) {
    this.create();
  }

  ngOnInit() {
    this.items = this.formBuilder.array([]);
  }

  async create() {
    let x;
    let i;
    await this.service.getProductCount().then(val => x = val)
    for (i = 0; i < x; i++) {
      await this.service.getProducti(i).then(val => {
        console.log(val)
        this.items.push(this.formBuilder.group({
          productName: val[1].split('#')[1],
          productNamei: val[1],
          photo: val[2].split('#')[1],
          rate: val[6]
        }));
      });
    }
  }

  oneproduct(productName){
    this.router.navigate(['/oneproduct'], { queryParams: { productName: productName }, skipLocationChange: true  });
  }
}
