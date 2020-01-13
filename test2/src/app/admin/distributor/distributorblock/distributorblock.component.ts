import { OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { DistributorserviceService } from 'app/service/distributorservice.service';
import { USER } from './USER';
import { Component } from '@angular/core';

@Component({
  selector: 'app-distributorblock',
  templateUrl: './distributorblock.component.html',
  styleUrls: ['./distributorblock.component.scss']
})
export class DistributorblockComponent implements OnInit {
  users: USER[] = [];
  public form1 = {
    email: null
  }
  block =true;
  form = {
    email: null,
    emailCode: null,
    name: null,
    photo: null,
    userAccess: null,
    i: null
  };
  items: FormArray;
  router: any;
  constructor(private service: DistributorserviceService, private formBuilder: FormBuilder) {
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
    let y =0;
    await this.service.getDistributorCount().then(val => x = val)
    for (i = 0; i < x; i++) {
      await this.service.getDistributori(i).then(async val => {
        if ( val[5] === '5' || val[5] === '3') {
          this.items.push(this.formBuilder.group({
            email: val[1],
            emailCode: val[0],
            name: val[2].split('#')[0],
            photo: val[2].split('#')[1],
            userAccess: val[5] === '5' ? true : false,
            i: y++
          }));
          console.log(this.items)
        }
      });
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async setValue(email: any, e: any,i) {
    console.log(email+'   '+e.checked+' '+i)
    let usreAccess; 
     if (e.checked) {
       console.log(e.checked)
      usreAccess = 5;
      // this.users[i].userAccess = 3;
    } else {
      usreAccess = 3;
      // this.users[i].userAccess = 5;
    }
    console.log(email+ '    ' + usreAccess);
    await this.service.editacc(email,usreAccess).then(
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
