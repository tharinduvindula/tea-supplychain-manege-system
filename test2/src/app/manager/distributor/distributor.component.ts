import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'app/service/adminservice.service';
import { DISTRIBUTOR } from 'app/models/DISTRIBUTOR';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-distributor',
  templateUrl: './distributor.component.html',
  styleUrls: ['./distributor.component.scss']
})
export class DistributorComponent implements OnInit {
  
  form ={
    contactNumber: null,
    email: null,
    emailCode: null,
    name: null,
    userAccess: null,
    userAddress: null,
  };
  items: FormArray;

  constructor(private service: AdminserviceService, private formBuilder: FormBuilder) {
    this.create();
   }

  ngOnInit() {
    this.items = this.formBuilder.array([]);
  }

  async create() {
    let x;
    let i;
    await this.service.getAdminCount().then(  val => x = val )
    console.log(x);
    for (i = 0; i < x; i++) {
      console.log(i)
      await this.service.getAdmini(i).then(val => {
        this.items.push(this.formBuilder.group({
          contactNumber: val[3],
          email: val[1],
          emailCode: val[0],
          name: val[2],
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
