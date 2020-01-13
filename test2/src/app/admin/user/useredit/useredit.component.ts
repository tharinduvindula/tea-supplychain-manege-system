import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { AdminserviceService } from 'app/service/adminservice.service';
import { Router } from '@angular/router';
import { ManagerserviceService } from 'app/service/managerservice.service';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.scss']
})
export class UsereditComponent implements OnInit {
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
  items1: FormArray;
  items2: FormArray;
  constructor(
    private service1: ManagerserviceService,
    private service2: AdminserviceService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.items1 = this.formBuilder.array([]);
    this.items2 = this.formBuilder.array([]);
    this.create1();
    this.create2();
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
    this.router.navigate(['/admin/user/update'], { queryParams: { Email: email } });
  }
  async ondelete1(event, email) {
    event.preventDefault();
    await this.service1.deleteManager(email).then(
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
    this.items1 = null;
    this.items1 = this.formBuilder.array([]);
    this.create1();
  }

  async ondelete2(event, email) {
    event.preventDefault();
    await this.service2.deleteAdmin(email).then(
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
    this.items2 = null;
    this.items2 = this.formBuilder.array([]);
    this.create2();
  }

  async create1() {
    let x;
    let i;
    await this.service1.getManagerCount().then(val => x = val)
    for (i = 0; i < x; i++) {
      await this.service1.getManageri(i).then(val => {
        if (val[5] !== '4') {
          this.items1.push(this.formBuilder.group({
            email: val[1],
            emailCode: val[0],
            name: val[2].split('#')[0],
            photo: val[2].split('#')[1],
            userAccess: val[5]
          }));
        }
      });
    }
  }

  async create2() {
    let x;
    let i;
    await this.service2.getAdminCount().then(val => x = val)
    for (i = 0; i < x; i++) {
      await this.service2.getAdmin(i).then(val => {
        if (val[5] !== '4') {
          this.items2.push(this.formBuilder.group({
            email: val[1],
            emailCode: val[0],
            name: val[2].split('#')[0],
            photo: val[2].split('#')[1],
            userAccess: val[5]
          }));
        }
      });
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
