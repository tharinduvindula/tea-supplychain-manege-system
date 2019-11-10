import { Component, OnInit } from '@angular/core';

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

  constructor(/*private User: UserService, private Token: TokenService, private Users: UserService*/) {
    this.getAlluser();
  }

  ngOnInit() {

  }
  getAlluser() {
    // this.User.getalluser().subscribe((all) => {
    //   this.users = all
    // }
    // );
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
