import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AdminserviceService } from 'app/service/adminservice.service';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.scss']
})
export class ProductaddComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  public form = {
    fullname: null,
    firstname: null,
    lastname: null,
    nic: null,
    sex: null,
    email: null,
    address: null,
    telephone: null,
    startdate: null,
    enddate: '',
    usertype: null,
    password: 'uosj@123',
    addingby: null,//this.Token.payload(this.Token.gettoken()).ud.fullname,
    lasteditby: null, //this.Token.payload(this.Token.gettoken()).ud.fullname,
    photo: null,
    productname: null,
    price: null,
    weight: null,
    type: null,
    flaver: null,
  };
  public form1 = {
    email: null
  };
  error: null;
  imageSrc;
  photoFile: any;
  //base64s
  photoString: string;


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

  public picked(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.photoFile = file;
      this.handleInputChange(file); // turn into base64
    } else {
      alert('No file selected');
    }
  }


  handleInputChange(files) {
    const file = files;
    const pattern = /image-*/;
    const reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    const reader = e.target;
    const base64result = reader.result.substr(reader.result.indexOf(',') + 1);
    // this.imageSrc = base64result;
    this.photoString = base64result;
    this.form.photo = this.photoString;
    console.log(this.form.photo)
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


