import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { DistributorserviceService } from 'app/service/distributorservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-distributoredit',
  templateUrl: './distributoredit.component.html',
  styleUrls: ['./distributoredit.component.scss']
})
export class DistributoreditComponent implements OnInit {
  // users: USER[] = [];
  public form1 = {
    email: null
  }
  form = {
    email: null, 
    emailCode: null,
    name: null,
    photo: null,
    userAccess: null,
  };
  Distributors: FormArray;
  Sellers: FormArray;
  constructor(private service: DistributorserviceService, private formBuilder: FormBuilder, private router: Router) {
   
  }

  ngOnInit() {
    this.Distributors = this.formBuilder.array([]);
    this.Sellers = this.formBuilder.array([]);
    this.create();
  }
  isMobileMenu() {
    if (screen.width > 991) {
      return false;
    }
    return true;
  }
  onedit(event, email) {
    event.preventDefault();
    this.form.email = email;
    this.router.navigate(['/admin/distributor/update'], { queryParams: { Email: email } });
  }
  async ondelete(event, email) {
    event.preventDefault();
    await this.service.deleteDistributor(email).then(
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
    this.Distributors=null;
    this.Distributors = this.formBuilder.array([]);
    this.Sellers=null;
    this.Sellers = this.formBuilder.array([]);
    this.create();
  }
 
  async create() {
    let x;
    let i;
    await this.service.getDistributorCount().then(val => x = val)
    for (i = 0; i < x; i++) {
      await this.service.getDistributori(i).then(val => {
        if (val[5] !== '4') {
          if (val[2].split('#')[2] === '1'){
          this.Distributors.push(this.formBuilder.group({
            email: val[1],
            emailCode: val[0],
            name: val[2].split('#')[0],
            photo: val[2].split('#')[1],
            userAccess: val[5]
          }));

        } else {
          this.Sellers.push(this.formBuilder.group({
            email: val[1],
            emailCode: val[0],
            name: val[2].split('#')[0],
            photo: val[2].split('#')[1],
            userAccess: val[5]
          }));
        }
      }
      });
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
