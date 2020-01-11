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
  items: FormArray;

  constructor(private service: DistributorserviceService, private formBuilder: FormBuilder) {
    this.create();
   }

  ngOnInit() {
    this.items = this.formBuilder.array([]);
  }

  async create() {
    let x;
    let i;
    await this.service.getDistributorCount().then(  val => x = val )

    console.log(x);
    for (i = 0; i < x; i++) {
      console.log(i)
      await this.service.getDistributori(i).then(val => {
        let contry;
        let contryy;
        if( val[4].split('#')[1] === 'US'){
          contry = `flag-icon-us`;
          contryy = 'Amarica';
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

        this.items.push(this.formBuilder.group({
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
      });
    }
    console.log(this.items.value);
  }

  delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

}
