import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { DistributorserviceService } from 'app/service/Distributorservice.service';
// import { DISTRIBUTOR } from 'app/models/DISTRIBUTOR';
<<<<<<< HEAD
=======
=======
import { DistributorserviceService } from 'app/service/distributorservice.service';
import { DISTRIBUTOR } from 'app/models/DISTRIBUTOR';
>>>>>>> 112c5ce068c8cc9a73c49077e6e1deb4ca7a0210
>>>>>>> 94c66129f3ab29bdbf2ef5e8714ccbcbe2633c9f
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
        this.items.push(this.formBuilder.group({
          contactNumber: val[3],
          email: val[1],
          emailCode: val[0],
          name: val[2].split('#')[0],
          photo: val[2].split('#')[1],
          userAccess: val[5],
          userAddress: val[4]
        }));
      });
    }
    console.log(this.items.value);
  }

  delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

}
