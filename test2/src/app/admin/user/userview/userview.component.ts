import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ManagerserviceService } from 'app/service/managerservice.service';
import { AdminserviceService } from 'app/service/adminservice.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.scss']
})
export class UserviewComponent implements OnInit {

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
  items1: FormArray;

  constructor(private managerservice: ManagerserviceService, private adminservice: AdminserviceService, private formBuilder: FormBuilder) {
    this.create();
  }

  ngOnInit() {
    this.items = this.formBuilder.array([]);
    this.items1 = this.formBuilder.array([]);
  }

  async create() {
    let x;
    let i;
    await this.managerservice.getManagerCount().then(val => x = val)
    
    for (i = 0; i < x; i++) {
      await this.managerservice.getManageri(i).then(val => {
        
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
    await this.adminservice.getAdminCount().then(val => x = val)
    for (i = 0; i < x; i++) {
      await this.adminservice.getAdmini(i).then(val => {
        console.log(val)
        this.items1.push(this.formBuilder.group({
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
  }
}
