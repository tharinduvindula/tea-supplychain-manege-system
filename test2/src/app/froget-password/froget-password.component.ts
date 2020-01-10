import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  constructor(private http: HttpClient) { 
    
  }

  ngOnInit() {
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
