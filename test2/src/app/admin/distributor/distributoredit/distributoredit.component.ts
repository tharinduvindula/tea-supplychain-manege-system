import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { DistributorserviceService } from 'app/service/distributorservice.service';

@Component({
  selector: 'app-distributoredit',
  templateUrl: './distributoredit.component.html',
  styleUrls: ['./distributoredit.component.scss']
})
export class DistributoreditComponent implements OnInit {
  // users: USER[] = [];
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
  items: FormArray;

  constructor(private service: DistributorserviceService, private formBuilder: FormBuilder) {
    this.create();
  }

  ngOnInit() {
    this.items = this.formBuilder.array([]);
  }

  isOtheruser() {
    // return this.users.filter(x => (x.id !== this.Token.payload(this.Token.gettoken()).sub) && (x.permenetdisable === 0));
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
    // this.UserHandle.multiuserhandleforuser(this.form).subscribe(
    //   data => {
    //     this.router.navigate(['/admin/User-Profile-edit'], { queryParams: { Email: email }, skipLocationChange: true });
    //   },
    //   error => {
    //     console.log(error)
    //   }
    // );
  }
  ondelete(event, email) {
    event.preventDefault();
    this.form.email = email;
    // this.UserHandle.multiuserhandleforuser(this.form).subscribe(
    //   data => {
    //     this.router.navigate(['/admin/User-Profile-delete'], { queryParams: { Email: email }, skipLocationChange: true });
    //   },
    //   error => {
    //     console.log(error)
    //   }
    // );
  }

  async create() {
    let x;
    let i;
    await this.service.getDistributorCount().then(val => x = val)
    for (i = 0; i < x; i++) {
      await this.service.getDistributori(i).then(val => {
        this.items.push(this.formBuilder.group({
          email: val[1],
          emailCode: val[0],
          name: val[2].split('#')[0],
          photo: val[2].split('#')[1],
          userAccess: val[5]
        }));
      });
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


}
