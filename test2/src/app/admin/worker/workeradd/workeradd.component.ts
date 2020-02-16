import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AdminserviceService } from 'app/service/adminservice.service';
import { SupervisorserviceService } from 'app/service/supervisorservice.service';
import { LoaderserviceService } from 'app/service/loaderservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-workeradd',
  templateUrl: './workeradd.component.html',
  styleUrls: ['./workeradd.component.scss']
})
export class WorkeraddComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  @ViewChild('workeraddForm') formValues;
  public form = {
    name: null,
    email: null,
    address: ' ',
    telephone: null,
    usertype: null,
    cunum: 94,
    photo: 'https://imgbbb.com/images/2019/11/19/csm_Julien_Konemann_2_8583d0abae.jpg'
  };
  public form1 = {
    email: null
  };
  error: null;


  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient,private supervisorservice: SupervisorserviceService, private loaderservice: LoaderserviceService/*, private addDemoService: AddDemoService, private Token: TokenService, private User: UserService*/) {

  }

  ngOnInit() {
  }

  yourOnUploadHandler(info) {
    console.log('fired Event "onUpload"');
    console.log(info);
    this.form.photo = info.cdnUrl;
  }

  async onsubmit() {
    const name = this.form.name + '#' + this.form.photo;
    const address = this.form.address;
    const telephone = this.form.cunum + this.form.telephone;
    if (this.form.usertype === 'Supervisor') {
      await this.supervisorservice.insertSupervisor(this.form.email, name, address, telephone).then(
        data => {
          if (data != null) {
            console.log(data);
            this.supervisorservice.getSupervisorToken(this.form.email).then(val => {
              console.log(val);
              this.registersupervisor(val);
            });
            this.formValues.resetForm();
          }

        },
        error => {
          // this.handleError(error)
          if (error != null) {
            console.log(error)
          }
        }

      );
    } else if (this.form.usertype === 'Loader') {
      await this.loaderservice.insertLoader(this.form.email, name, address, telephone).then(
        data => {
          if (data != null) {
            console.log(data);
            this.loaderservice.getLoaderToken(this.form.email).then(val => {
              console.log(val);
              this.registerloader(val);
            });
            this.formValues.resetForm();
          }

        },
        error => {
          // this.handleError(error)
          if (error != null) {
            console.log(error)
          }
        }

      );
    }
    this.form1.email = this.form.email;
  }

  handleError(error) {
    this.error = error.error.error;
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  registerloader(token) {
    let user = {
      name: this.form.email,
      token: token,
      email: this.form.email.split('@')[0]
    }
    this.http.post('https://emailsender1.herokuapp.com/sendmailLoaderRegistation', user).subscribe(
      data => {
        let res: any = data;
        console.log(
          ` ${res.messageId}`
        );
      },
      err => {
        console.log(err);
      }, () => {
        console.log('hi');
      }
    );
  }

  registersupervisor(token) {
    let user = {
      name: this.form.email,
      token: token,
      email: this.form.email.split('@')[0]
    }
    this.http.post('https://emailsender1.herokuapp.com/sendmailSupervisorRegistation', user).subscribe(
      data => {
        let res: any = data;
        console.log(
          ` ${res.messageId}`
        );
      },
      err => {
        console.log(err);
      }, () => {
        console.log('hi');
      }
    );
  }
}


