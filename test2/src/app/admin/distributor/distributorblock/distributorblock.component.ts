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
  onedit(event: { preventDefault: () => void; }, email: any) {
    event.preventDefault();
    this.form.email = email;
    // this.UserHandle.multiuserhandleforuser(this.form).subscribe(
    //   data => {
    //     this.router.navigate(['/admin/User-Profile-edit'], { queryParams: { Email: email }, skipLocationChange: true });
    //   },
    //   error => {
    //     console.log(error)
    //   }
    // );
  }
  ondelete(event: { preventDefault: () => void; }, email: any) {
    event.preventDefault();
    this.form.email = email;
    this.router.navigate(['/admin/d'], { queryParams: { Email: email }, skipLocationChange: true });

  }

  async create() {
    let x: number;
    let i: number;
    await this.service.getDistributorCount().then(val => x = val)
    for (i = 0; i < x; i++) {
      await this.service.getDistributori(i).then(async val => {
        if (val[5] == 1 ) {
          // tslint:disable-next-line: no-unused-expression
          this.form.email = val[1];
          this.form.emailCode = val[0];
          this.form.name = val[2].split('#')[0];
          this.form.photo = val[2].split('#')[1];
          this.form.userAccess = val[5] == 1 ? 1 : 0;
          this.users.push(this.form);

        }
      });
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async setValue(email: any, e: any,i) {
    console.log(e+'   '+e.checked)
    let usreAccess; 
     if (e.checked) {
      usreAccess = 3;
      this.users[i].userAccess = 3;
    } else {
      usreAccess = 5;
      this.users[i].userAccess = 5;
    }
    console.log(email+ '    ' + usreAccess);
    await this.service.blockDistributor(email).then(
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
