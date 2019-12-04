import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { SupervisorserviceService } from 'app/service/supervisorservice.service';
import { LoaderserviceService } from 'app/service/loaderservice.service';

@Component({
  selector: 'app-workerview',
  templateUrl: './workerview.component.html',
  styleUrls: ['./workerview.component.scss']
})
export class WorkerviewComponent implements OnInit {

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

  constructor(private supervisorservice: SupervisorserviceService, private loaderservice: LoaderserviceService, private formBuilder: FormBuilder) {
    this.create();
  }

  ngOnInit() {
    this.items = this.formBuilder.array([]);
    this.items1 = this.formBuilder.array([]);
  }

  async create() {
    let x;
    let i;
    await this.supervisorservice.getSupervisorCount().then(val => x = val)
    for (i = 0; i < x; i++) {
      await this.supervisorservice.getSupervisori(i).then(val => {
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
    await this.loaderservice.getLoaderCount().then(val => x = val)
    for (i = 0; i < x; i++) {
      await this.loaderservice.getLoaderi(i).then(val => {
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
