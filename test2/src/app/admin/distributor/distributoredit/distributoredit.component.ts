import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distributoredit',
  templateUrl: './distributoredit.component.html',
  styleUrls: ['./distributoredit.component.scss']
})
export class DistributoreditComponent implements OnInit {
  // users: USER[] = [];
  public form = {
    email: null
  }

  constructor() { }

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


}
