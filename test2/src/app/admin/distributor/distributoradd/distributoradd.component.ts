import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DistributorserviceService } from 'app/service/distributorservice.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-distributoradd',
  templateUrl: './distributoradd.component.html',
  styleUrls: ['./distributoradd.component.scss']
})
export class DistributoraddComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  @ViewChild('useraddForm') formValues;
  public form = {
    name: null,
    email: null,
    address: null,
    telephone: null,
    contry: null,
    cunum: null,
    photo: null,
    type: null,
  };
  error;
  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient,private service: DistributorserviceService/*, private addDemoService: AddDemoService, private Token: TokenService, private User: UserService*/) {

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
    const name = this.form.name + '#' + this.form.photo + '#' + this.form.type;
    const address = this.form.address + '#' + this.form.contry;
    const telephone = this.form.cunum + '' + this.form.telephone;
    const email = this.form.email;
    await this.service.insertDistributor(this.form.email, name, address, telephone).then(
      data => {
        if ( data != null) {
        console.log(data);
          this.service.getDistributorToken(this.form.email).then(val => {
              console.log(val);
            this.registerdistributor(val,email)
            });
        this.formValues.resetForm();
        }

      },
      error => {
       // this.handleError(error)
        if (error != null) {
          console.log(error)
          this.error =error;
        }
      }

    );
  }

  handleError(error) {
    this.error = error.error.error;
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
  changcnum(x) {
    if (x === 'US') {
      this.form.cunum = 1;
    } else if (x === 'AI') {
      this.form.cunum = 61;
    } else if (x === 'GB') {
      this.form.cunum = 44;
    } else if (x === 'CA') {
      this.form.cunum = 1;
    } else if (x === 'NZ') {
      this.form.cunum = 64;
    } else if (x === 'RU') {
      this.form.cunum = 7;
    } else if (x === 'SA') {
      this.form.cunum = 966;
    } else if (x === 'LK') {
      this.form.cunum = 94;
    }
  }

  registerdistributor(token,email) {
    let user = {
      name: email.split('@')[0],
      token: token,
      email: email
    }
    this.http.post('http://emailsender1.herokuapp.com/sendmailDistributorRegistation', user).subscribe(
      data => {
        let res: any = data;
        console.log(
          ` ${res.messageId}`
        );
      },
      err => {
        console.log(err);
      }, () => {
        console.log('hi');
      }
    );
    
  }

}


