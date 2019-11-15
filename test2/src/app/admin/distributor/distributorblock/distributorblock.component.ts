import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { AdminserviceService } from 'app/service/adminservice.service';

@Component({
  selector: 'app-distributorblock',
  templateUrl: './distributorblock.component.html',
  styleUrls: ['./distributorblock.component.scss']
})
export class DistributorblockComponent implements OnInit {

 // users: USER[] = [];
  public form = {
    email: null,
    temporydisable: null
  }
  form1 = {
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
    await this.service.getAdminCount().then(val => x = val)
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

  isOtheruser() {
   // return this.users.filter(x => (x.id !== this.Token.payload(this.Token.gettoken()).sub) && (x.permenetdisable === 0));
  }
  setValue(email, e) {
    if (e.checked) {
      this.form.temporydisable = 0;
      this.form.email = email;
    } else {
      this.form.temporydisable = 1;
      this.form.email = email;
    }
    // this.Users.temporarydisable(this.form).subscribe(
    //   data => { }
    // );
  }


  isMobileMenu() {
    if (screen.width > 991) {
      return false;
    }
    return true;
  }


}
