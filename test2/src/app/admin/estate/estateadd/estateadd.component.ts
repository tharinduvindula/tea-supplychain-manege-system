import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EstateserviceService } from 'app/service/estateservice.service';

@Component({
  selector: 'app-estateadd',
  templateUrl: './estateadd.component.html',
  styleUrls: ['./estateadd.component.scss']
})
export class EstateaddComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  @ViewChild('estateaddForm') formValues;
  public form = {
    estateName: null,
    photo: 'https://i.ibb.co/K6KH5V7/beb29b45d9e431b294dd2510c371f25c-XL.jpg',
    address: null,
    ownerName: null,
    contactNumber: null,
    email: null,
  };
  // 'https://i.ibb.co/fNwMyzz/mmp6178-edited.jpg'
  error: null;
  imageSrc;
  photoFile: any;
  // base64s
  photoString: string;


  // tslint:disable-next-line: max-line-length
  constructor(private service: EstateserviceService/*, private addDemoService: AddDemoService, private Token: TokenService, private User: UserService*/) {

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
    const estateAddress = this.form.address + '#' + this.form.photo;
    const contactnumberAndEmail = this.form.contactNumber + '#' + this.form.email;
    await this.service.insertEstate(this.form.estateName, estateAddress, this.form.ownerName, contactnumberAndEmail).then(
      data => {
        if (data != null) {
          console.log(data);
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

  handleError(error) {
    this.error = error.error.error;
  }


  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
}


