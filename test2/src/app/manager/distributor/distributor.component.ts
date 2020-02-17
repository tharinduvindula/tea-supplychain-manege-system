import { Component, OnInit } from '@angular/core';
import { DistributorserviceService } from './../../service/distributorservice.service';
// import { DISTRIBUTOR } from 'app/models/DISTRIBUTOR';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-distributor',
  templateUrl: './distributor.component.html',
  styleUrls: ['./distributor.component.scss']
})
export class DistributorComponent implements OnInit {
  form = {
    contactNumber: null,
    email: null,
    emailCode: null,
    name: null,
    photo: null,
    userAccess: null,
    userAddress: null,
    contryx: null
  };
  Distributors: FormArray;
  Sellers: FormArray;

  constructor(private service: DistributorserviceService, private formBuilder: FormBuilder) {
    this.create();
   }

  ngOnInit() {
    this.Distributors = this.formBuilder.array([]);
    this.Sellers = this.formBuilder.array([]);
  }

  async create() {
    let x;
    let i;
    await this.service.getDistributorCount().then(  val => x = val )

    
    for (i = 0; i < x; i++) {
      await this.service.getDistributori(i).then(val => {
        console.log(val)
        let contry;
        let contryy;
        if( val[4].split('#')[1] === 'US'){
          contry = `flag-icon-us`;
          contryy = 'America';
        }
        else if (val[4].split('#')[1] === 'AI') {
          contry = `flag-icon-ai`;
          contryy = 'Australia';
        }
        else if (val[4].split('#')[1] === 'GB') {
          contry = `flag-icon-gb`;
          contryy ='England';
        }
        else if (val[4].split('#')[1] === 'CA') {
          contry = `flag-icon-ca`;
          contryy = 'Canada';
        }
        else if (val[4].split('#')[1] === 'NZ') {
          contry = `flag-icon-nz`;
          contryy = 'New Zeland';
        }
        else if (val[4].split('#')[1] === 'RU') {
          contry = `flag-icon-ru`;
          contryy = 'Rusia';
        }
        else if (val[4].split('#')[1] === 'SA') {
          contry = `flag-icon-sa`;
          contryy = 'Saudhi';
        }
        else if (val[4].split('#')[1] === 'LK') {
          contry = `flag-icon-lk`;
          contryy = 'Sri Lanka';
        }

        if (val[2].split('#')[2] === '1'){
          this.Distributors.push(this.formBuilder.group({
            contactNumber: val[3],
            email: val[1],
            emailCode: val[0],
            name: val[2].split('#')[0],
            photo: val[2].split('#')[1],
            userAccess: val[5],
            userAddress: val[4],
            contryx: contry,
            contryxx: contryy
          }));
        } else {
          this.Sellers.push(this.formBuilder.group({
            contactNumber: val[3],
            email: val[1],
            emailCode: val[0],
            name: val[2].split('#')[0],
            photo: val[2].split('#')[1],
            userAccess: val[5],
            userAddress: val[4],
            contryx: contry,
            contryxx: contryy
          }));
        }
      });
    }
  }

  delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

}
