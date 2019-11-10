import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'app/service/adminservice.service';

@Component({
  selector: 'app-distributoradd',
  templateUrl: './distributoradd.component.html',
  styleUrls: ['./distributoradd.component.scss']
})
export class DistributoraddComponent implements OnInit {

  fullname: string;
  firstname: string;
  lastname: string;
  nic: string;
  address: string;
  telephone: string;
  email: string;
  startdate: string;
  addingby: string;

    public form = {
    email: null
  };

    // tslint:disable-next-line: max-line-length
    constructor(private service: AdminserviceService/*, private addDemoService: AddDemoService, private Token: TokenService, private User: UserService*/) {

      // this.addingby = this.Token.payload(this.Token.gettoken()).ud.fullname;
      //this.adddistributor('tv@gmail.com', 'tv');
    }

    ngOnInit() {
    }

    AddDemo(event) {
      event.preventDefault();
      // this.addDemoService.registerDemo(
      //   this.fullname,
      //   this.firstname,
      //   this.lastname,
      //   this.nic,
      //   this.address,
      //   this.telephone,
      //   this.email,
      //   this.startdate,
      //   this.addingby
      // ).subscribe((data) => {

      // });
      // this.form.email = this.email;
      // this.User.sendPasswordResetLink(this.form).subscribe(
      //   data => { }
      // );

  }

  adddistributor(email, name){
    this.service.insertAdmin(email,name)
  }

}

