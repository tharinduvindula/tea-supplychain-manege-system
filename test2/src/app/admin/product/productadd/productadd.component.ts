import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ProductserviceService } from 'app/service/productservice.service';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.scss']
})
export class ProductaddComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  @ViewChild('productaddForm') formValues;
  public form = {
    productId: null,
    productName: null,
    photo: 'https://i.ibb.co/fNwMyzz/mmp6178-edited.jpg',
    packetType: null,
    flaver: null,
    weight: null,
    price: null,
  };
  
  error: null;
  imageSrc;
  photoFile: any;
  // base64s
  photoString: string;

  constructor(private service: ProductserviceService) {

    // this.addingby = this.Token.payload(this.Token.gettoken()).ud.fullname;
    // this.adddistributor('tv@gmail.com', 'tv');
  }

  ngOnInit() {
  }

  yourOnUploadHandler(info) {
    console.log('fired Event "onUpload"');
    console.log(info);
    this.form.photo = info.cdnUrl;
  }

  async onsubmit() {

    console.log(this.form)
    const productName = this.form.productId + '#' + this.form.productName
    const flaver = this.form.flaver + '#' + this.form.photo;
    const packetTypeAndWeight = this.form.packetType + '#' + this.form.weight;
    await this.service.insertProduct(productName, flaver, packetTypeAndWeight, this.form.price).then(
      data => {
        if (data != null) {
          console.log(data);
          this.formValues.resetForm();
        }

      },
      error => {
        this.handleError(error)
        if (error != null) {
          this.error =error;
          console.log(error)
        }
      }

    );

  }

  handleError(error) {
    this.error = error.error.error;
  }


  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
}

