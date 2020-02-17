import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ProductserviceService } from 'app/service/productservice.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.scss']
})
export class ProducteditComponent implements OnInit {
  public form1 = {
    email: null
  }
  form = {
    productName: null,
    productNamei: null,
    productNameCode: null,
    name: null,
    photo: null,
    userAccess: null,
  };
  items: FormArray;
  constructor(private service: ProductserviceService, private formBuilder: FormBuilder, private router: Router) {

  }

  ngOnInit() {
    this.items = this.formBuilder.array([]);
    this.create();
  }
  isMobileMenu() {
    if (screen.width > 991) {
      return false;
    }
    return true;
  }
  onedit(event, productNamei) {
    event.preventDefault();
    this.form.productNamei = productNamei;
    console.log(productNamei)
    this.router.navigate(['/admin/product/update'], { queryParams: { productName: productNamei }, skipLocationChange: true  });
  }
  async ondelete(event, email) {
    event.preventDefault();
    await this.service.deleteProduct(email).then(
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
    this.items = null;
    this.items = this.formBuilder.array([]);
    this.create();
  }

  async create() {
    let x;
    let i;
    await this.service.getProductCount().then(val => x = val)
    for (i = 0; i < x; i++) {
     
      await this.service.getProducti(i).then(val => {
        console.log(val)
        if (val[4] !== '4') {
          this.items.push(this.formBuilder.group({
            productId: val[1].split('#')[0],
            productName: val[1].split('#')[1],
            productNamei: val[1],
            productNameCode: val[0],
            weight: val[3].split('#')[1],
            photo: val[2].split('#')[1],
            userAccess: val[4]
          }));
        }
      });
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
