import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductserviceService } from 'app/service/productservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productupdate',
  templateUrl: './productupdate.component.html',
  styleUrls: ['./productupdate.component.scss']
})
export class ProductupdateComponent implements OnInit {

  @ViewChild('productEditForm') formValues;
  public form = {
    productId: null,
    productName: null,
    photo: null,
    packetType: null,
    flaver: null,
    weight: null,
    price: null,
  };
  public form1 = {
    productId: null,
    productName: null,
    photo: null,
    packetType: null,
    flaver: null,
    weight: null,
    price: null,
  };
  public form2 = {
    email: null
  };
  error: null;


  // tslint:disable-next-line: max-line-length
  constructor(private service: ProductserviceService, private Activatedroute: ActivatedRoute, private router: Router/*, private addDemoService: AddDemoService, private Token: TokenService, private User: UserService*/) {

    // this.addingby = this.Token.payload(this.Token.gettoken()).ud.fullname;
    // this.adddistributor('tv@gmail.com', 'tv');
    this.getProduct(this.Activatedroute.snapshot.queryParamMap.get('productName'));
  }

  ngOnInit() {
  }

  yourOnUploadHandler(info) {
    console.log('fired Event "onUpload"');
    console.log(info);
    this.form.photo = info.cdnUrl;
  }

  async onsubmit() {
    const productName = this.form.productId + '#' + this.form.productName
    const flaver = this.form.flaver + '#' + this.form.photo;
    const packetTypeAndWeight = this.form.packetType + '#' + this.form.weight;
    // tslint:disable-next-line: max-line-length
    if (this.form1.flaver === this.form.flaver && this.form1.photo === this.form.photo && this.form1.packetType === this.form.packetType && this.form1.weight === this.form.weight && this.form1.price === this.form.price) {
      this.router.navigateByUrl('/admin/product/edit');
    }
    // tslint:disable-next-line: max-line-length
    else if ((this.form1.flaver !== this.form.flaver || this.form1.photo !== this.form.photo) && this.form1.packetType === this.form.packetType && this.form1.weight === this.form.weight && this.form1.price === this.form.price ) {
      await this.service.updateProductFlaver(productName, flaver).then(
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
      this.router.navigate(['/admin/product/view']);
    }
    // tslint:disable-next-line: max-line-length
    else if (this.form1.flaver === this.form.flaver && this.form1.photo === this.form.photo && (this.form1.packetType !== this.form.packetType || this.form1.weight === this.form.weight) && this.form1.price === this.form.price ) {

      await this.service.updateProductPacketTypeAndWeight(productName, packetTypeAndWeight).then(
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
      this.router.navigate(['/admin/product/view']);
    }
    // tslint:disable-next-line: max-line-length
    else if (this.form1.flaver === this.form.flaver && this.form1.photo === this.form.photo && this.form1.packetType === this.form.packetType && this.form1.weight === this.form.weight && this.form1.price !== this.form.price) {
      await this.service.updateProductPrice(productName, this.form.price).then(
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
      this.router.navigate(['/admin/product/view']);
    } else {
      const arr: number[] = [];
      if (this.form1.flaver !== this.form.flaver || this.form1.photo !== this.form.photo) {
        arr.push(1);
      } else {
        arr.push(0);
      }
      if (this.form1.packetType !== this.form.packetType || this.form1.weight !== this.form.weight) {
        arr.push(2);
      } else {
        arr.push(0);
      }
      if (this.form1.price !== this.form.price) {
        arr.push(3);
      } else {
        arr.push(0);
      }

      await this.service.updateProduct(productName, arr, flaver, packetTypeAndWeight, this.form.price).then(
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
      this.router.navigate(['/admin/product/view']);
    }
  }

  handleError(error) {
    this.error = error.error.error;
  }

  async getProduct(productName) {
    await this.service.getProduct(productName).then(val => {
      if (val[4] !== '4') {
        this.form.productId = val[1].split('#')[0];
        this.form1.productId = val[1].split('#')[0];
        this.form.productName = val[1].split('#')[1];
        this.form1.productName = val[1].split('#')[1];
        this.form.flaver = val[2].split('#')[0];
        this.form1.flaver = val[2].split('#')[0];
        this.form.photo = val[2].split('#')[1],
        this.form1.photo = val[2].split('#')[1],
        this.form.price = val[5],
        this.form1.price = val[5],
        this.form.packetType = val[3].split('#')[0],
        this.form1.packetType = val[3].split('#')[0],
        this.form.weight = val[3].split('#')[1]
        this.form1.weight = val[3].split('#')[1]
      }
    });
  }
}


