import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EthcontractService } from 'app/web3-servise/ethcontract.service';
import { AdminserviceService } from 'app/service/adminservice.service';
import { ManagerserviceService } from 'app/service/managerservice.service';

@Component({
  selector: 'app-froget-password',
  templateUrl: './froget-password.component.html',
  styleUrls: ['./froget-password.component.scss']
})
export class FrogetPasswordComponent implements OnInit {
  error;
  loggedin;
  login() {
  }
  constructor(private http: HttpClient, private service: EthcontractService, private adminservice: AdminserviceService,
    private managerservice: ManagerserviceService
    ) { 
  }

  ngOnInit() {
  }

  frogetpassword() {
    this.service.frogetPassword({_userName: this.form.email}).then(
      async data => {
        await this.adminservice.isUserAdmin(this.form.email).then(
          async data1 => {
            console.log(data1);
            if (data1 === true) {
              console.log('admin email')
              await this.adminservice.getAdminToken(this.form.email).then(
                data2 => {
                  console.log(data2)
                },
                error =>{
                  console.log(error)
                }
              )

            } else {
              console.log('manager email');
              await this.managerservice.getManagerToken(this.form.email).then(
                data2 => {
                  console.log(data2)
                },
                error => {
                  console.log(error)
                }
              )
            }
          }, error => {
            console.log(error);
          });
      },
      error => {
        console.log(error);
        // this.handleError(error);
      }
    );
  }

  // tslint:disable-next-line: member-ordering
  form = {
    email: '',
    password: ''
  };

  register() {
    let user = {
      name: this.form.email,
      email: this.form.email.split('@')[0]
    }
    this.http.post('https://emailsender1.herokuapp.com/sendmail', user).subscribe(
      data => {
        let res: any = data;
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
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
