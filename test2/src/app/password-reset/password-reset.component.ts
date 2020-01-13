import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EthcontractService } from 'app/web3-servise/ethcontract.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {
  error;
  loggedin;
  form = {
    email: null,
    password: null,
    comPassword: null,
    token: null,
  };


  constructor(private Activatedroute: ActivatedRoute, private router: Router, private service: EthcontractService) {
    this.form.token = this.Activatedroute.snapshot.queryParamMap.get('Token');
  }

  ngOnInit() {
  }

  resetPassword() {
    if (this.form.password !== this.form.comPassword) {
      this.error = 'Password dost Not Match';
      return true;
    }
    this.service.passwordReset({_userName: this.form.email, _password: this.form.password, _token: this.form.token}).then(
      data => {
        console.log(data);
        this.router.navigateByUrl('/login');
      },
      error => {
        console.log(error)
      }

    )

  }


}
