import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DistributorserviceService } from 'app/service/distributorservice.service';

@Component({
  selector: 'app-distributorupdate',
  templateUrl: './distributorupdate.component.html',
  styleUrls: ['./distributorupdate.component.scss']
})
export class DistributorupdateComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  @ViewChild('useraddForm') formValues;
  public form = {
    name: null,
    email: null,
    emailCode: null,
    address: null,
    telephone: null,
    contry: null,
    cunum: null,
    photo: null,
    type: null,
  };
  public form1 = {
    name: null,
    email: null,
    emailCode: null,
    address: null,
    telephone: null,
    contry: null,
    cunum: null,
    photo: null,
    type: null,
  };
  public form2 = {
    email: null
  };
  error: null;


  // tslint:disable-next-line: max-line-length
  constructor(private service: DistributorserviceService, private Activatedroute: ActivatedRoute, private router: Router/*, private addDemoService: AddDemoService, private Token: TokenService, private User: UserService*/) {

    // this.addingby = this.Token.payload(this.Token.gettoken()).ud.fullname;
    // this.adddistributor('tv@gmail.com', 'tv');
    console.log(this.Activatedroute.snapshot.queryParamMap.get('Email'))
    this.getdistubtor(this.Activatedroute.snapshot.queryParamMap.get('Email'));
    console.log('hi1')
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
    const telephone = this.form.cunum +''+ this.form.telephone;
    // tslint:disable-next-line: max-line-length
    if (this.form1.name === this.form.name && this.form1.address === this.form.address && this.form1.photo === this.form.photo && this.form1.contry === this.form.contry && this.form1.telephone === this.form.telephone ) {
      this.router.navigateByUrl('/admin/distributor/edit');
      console.log(11)
    }
    // tslint:disable-next-line: max-line-length
    else if ((this.form1.name !== this.form.name || this.form1.photo !== this.form.photo)  && this.form1.address === this.form.address && this.form1.contry === this.form.contry && this.form1.telephone === this.form.telephone) {
      await this.service.updateDistributorName(this.form1.email, name).then(
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
      this.router.navigate(['/admin/distributor/view']);
    }
    // tslint:disable-next-line: max-line-length
    else if (this.form1.name === this.form.name && this.form1.photo === this.form.photo && (this.form1.address !== this.form.address || this.form1.contry === this.form.contry) && this.form1.telephone === this.form.telephone) {
      await this.service.updateDistributorAddress(this.form1.email, address).then(
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
      this.router.navigate(['/admin/distributor/view']);

    }
    // tslint:disable-next-line: max-line-length
    else if (this.form1.name === this.form.name && this.form1.photo === this.form.photo && this.form1.address === this.form.address && this.form1.contry === this.form.contry && this.form1.telephone !== this.form.telephone) {
      await this.service.updateDistributorContactNumber(this.form1.email, telephone).then(
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
      this.router.navigate(['/admin/distributor/view']);
    } else {
      const arr: number[] = [];
      if (this.form1.name !== this.form.name || this.form1.photo !== this.form.photo) {
        arr.push(1);
      } else {
        arr.push(0);
      }
      if (this.form1.address !== this.form.address || this.form1.contry !== this.form.contry) {
        arr.push(2);
      } else {
        arr.push(0);
      }
      if (this.form1.telephone !== this.form.telephone || this.form1.contry !== this.form.contry ) {
        arr.push(3);
      } else {
        arr.push(0);
      }

      await this.service.updateDistributor(this.form1.email, arr, name, address, telephone).then(
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
      this.router.navigate(['/admin/distributor/view']);
    }
    
    this.form2.email = this.form.email;
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

  async getdistubtor(email) {
    await this.service.getDistributor(email).then(val => {
      if (val[5] !== 4) {
        this.form.email = val[1];
        this.form1.email = val[1];
        this.form.emailCode = val[0];
        this.form1.emailCode = val[0];
        this.form.name = val[2].split('#')[0];
        this.form1.name = val[2].split('#')[0];
        this.form.photo = val[2].split('#')[1],
        this.form1.photo = val[2].split('#')[1],
        this.form.cunum = val[3].substring(0, 2),
        this.form.cunum = val[3].substring(0, 2),
        this.form.telephone = val[3].split(val[3].substring(0, 2))[1],
        this.form1.telephone = val[3].split(val[3].substring(0, 2))[1],
        this.form.address = val[4].split('#')[0],
        this.form1.address = val[4].split('#')[0],
        this.form.contry = val[4].split('#')[1],
        this.form1.contry = val[4].split('#')[1],
        this.form.type = val[2].split('#')[2],
        this.form1.type = val[2].split('#')[2]
      }
    });
  }

  changcnum(x) {
    if (x === 'US'){
      this.form.cunum =1;
    } else if ( x === 'AI') {
      this.form.cunum = 61;
    } else if (x === 'GB') {
      this.form.cunum =44;
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
}


