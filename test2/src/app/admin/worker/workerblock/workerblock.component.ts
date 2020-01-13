import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { SupervisorserviceService } from 'app/service/supervisorservice.service';
import { LoaderserviceService } from 'app/service/loaderservice.service';

@Component({
  selector: 'app-workerblock',
  templateUrl: './workerblock.component.html',
  styleUrls: ['./workerblock.component.scss']
})
export class WorkerblockComponent implements OnInit {
  items1: FormArray;
  items2: FormArray;
  router: any;
  constructor(
    private service1: SupervisorserviceService,
    private service2: LoaderserviceService,
    private formBuilder: FormBuilder
    ) {
    this.create1();
    this.create2();
  }

  ngOnInit() {
    this.items1 = this.formBuilder.array([]);
    this.items2 = this.formBuilder.array([]);
  }
  isMobileMenu() {
    if (screen.width > 991) {
      return false;
    }
    return true;
  }

  async create1() {
    let x: number;
    let i: number;
    let y = 0;
    await this.service1.getSupervisorCount().then(val => x = val)
    for (i = 0; i < x; i++) {
      await this.service1.getSupervisori(i).then(async val => {
        if (val[5] === '5' || val[5] === '3') {
          this.items1.push(this.formBuilder.group({
            email: val[1],
            emailCode: val[0],
            name: val[2].split('#')[0],
            photo: val[2].split('#')[1],
            userAccess: val[5] === '5' ? true : false,
            i: y++
          }));
        }
      });
    }
  }

  async create2() {
    let x: number;
    let i: number;
    let y = 0;
    await this.service2.getLoaderCount().then(val => x = val)
    for (i = 0; i < x; i++) {
      await this.service2.getLoaderi(i).then(async val => {
        if (val[5] === '5' || val[5] === '3') {
          this.items2.push(this.formBuilder.group({
            email: val[1],
            emailCode: val[0],
            name: val[2].split('#')[0],
            photo: val[2].split('#')[1],
            userAccess: val[5] === '5' ? true : false,
            i: y++
          }));
        }
      });
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async setValue1(email: any, e: any, i) {
    let usreAccess;
    if (e.checked) {
      usreAccess = 5;
    } else {
      usreAccess = 3;
    }
    await this.service1.editacc(email, usreAccess).then(
      data => {
        if (data != null) {
          console.log(data);
        }
      },
      error => {
        if (error != null) {
          console.log(error)
        }
      });
  }

  async setValue2(email: any, e: any, i) {
    let usreAccess;
    if (e.checked) {
      usreAccess = 5;
    } else {
      usreAccess = 3;
    }
    await this.service2.editacc(email, usreAccess).then(
      data => {
        if (data != null) {
          console.log(data);
        }
      },
      error => {
        if (error != null) {
          console.log(error)
        }
      });
  }

}
