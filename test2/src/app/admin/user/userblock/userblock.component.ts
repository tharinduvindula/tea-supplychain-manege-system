import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ManagerserviceService } from 'app/service/managerservice.service';

@Component({
  selector: 'app-userblock',
  templateUrl: './userblock.component.html',
  styleUrls: ['./userblock.component.scss']
})
export class UserblockComponent implements OnInit {
  items: FormArray;
  router: any;
  constructor(private service: ManagerserviceService, private formBuilder: FormBuilder) {
    this.create();
  }

  ngOnInit() {
    this.items = this.formBuilder.array([]);
  }
  isMobileMenu() {
    if (screen.width > 991) {
      return false;
    }
    return true;
  }

  async create() {
    let x: number;
    let i: number;
    let y = 0;
    await this.service.getManagerCount().then(val => x = val)
    for (i = 0; i < x; i++) {
      await this.service.getManageri(i).then(async val => {
        console.log(val)
        if (val[5] === '5' || val[5] === '3') {
          this.items.push(this.formBuilder.group({
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

  async setValue(email: any, e: any, i) {
    let usreAccess;
    if (e.checked) {
      usreAccess = 5;
    } else {
      usreAccess = 3;
    }
    await this.service.editacc(email, usreAccess).then(
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
