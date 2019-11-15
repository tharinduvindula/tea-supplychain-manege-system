import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminserviceService } from 'app/service/adminservice.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-distributoradd',
  templateUrl: './distributoradd.component.html',
  styleUrls: ['./distributoradd.component.scss']
})
export class DistributoraddComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  @ViewChild('useraddForm') formValues;
  public form = {
    name: null,
    email: null,
    address: null,
    telephone: null,
    contry: null,
    photo: 'https://i.ibb.co/zZ7v6D1/user.png'
  };
  public form1 = {
    email: null
  };
  error: null;


  // tslint:disable-next-line: max-line-length
  constructor(private service: AdminserviceService/*, private addDemoService: AddDemoService, private Token: TokenService, private User: UserService*/) {

    // this.addingby = this.Token.payload(this.Token.gettoken()).ud.fullname;
    // this.adddistributor('tv@gmail.com', 'tv');
  }

  ngOnInit() {
  }

  yourOnUploadHandler(info) {
    console.log('fired Event "onUpload"');
    console.log(info);
    this.form.photo = info.cdnUrl;
  }

  onsubmit() {
    // this.Users.adduser(this.form).subscribe(
    //   data => this.formValues.resetForm(),
    //   error => this.handleError(error),
    // );
    // this.form1.email = this.form.email;
    // this.Users.sendPasswordResetLink(this.form1).subscribe(
    //   data => { }
    // );
  }

  handleError(error) {
    this.error = error.error.error;
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
}


