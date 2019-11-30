import { Component, OnInit, HostListener, NgZone, Inject } from '@angular/core';
import { EthcontractService } from 'app/web3-servise/ethcontract.service';
import 'rxjs';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminserviceService } from 'app/service/adminservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  heroForm: FormGroup;

  form = {
    email: '',
    password: ''
  };


  title = 'your first DApp in Angular';
  accounts: any;
  transferFrom = '0x0';
  balance = '0 ETH';
  transferTo = '';
  amount = 0;
  remarks = '';
  acctInfo: {
    fromAccount: any,
    balance: any
  };
  error = '';
  constructor(private ethcontractService: EthcontractService, private adminservice: AdminserviceService, private router: Router) {
    // this.initAndDisplayAccount();
  }


  async login() {
    console.log(Date.now()/1000)
    await this.ethcontractService.login({ _userName: this.form.email, _password: this.form.password }).then(
      data => {
        console.log(data);
        // this.adminservice.isUserAdmin(this.form.email).then(
        //   data1 => {
        //     this.router.navigateByUrl('/');
        //   }, error => {
        //     this.router.navigateByUrl('/admin');
        //   });
        },
      error => { 
        console.log(error);
        this.handleError(error);
      }
    );
    console.log(Date.now() / 1000)
  }

  // handleResponse(data) {
  //   this.Token.handle(data.user);
  //   this.Auth.changeAuthStatus(true);
  //   if (this.Token.isUserAdmin()) {
  //     this.router.navigateByUrl('admin/Dashboard');
  //   } else if (this.Token.isUserdemo()) {
  //     this.router.navigateByUrl('demo/Dashboard');
  //   } else if (this.Token.isUserLecture()) {
  //     this.router.navigateByUrl('lecturer/Dashboard');
  //   } else {
  //     this.router.navigateByUrl('login');
  //   }
  // }

  handleError(error) {
    this.error = error;

  }
   // tslint:disable-next-line: use-life-cycle-interface
   ngOnInit(): void {
    // this.Auth.authStatus.subscribe(value => this.loggedin = value)
  // this.heroForm = new FormGroup({
  //   'email': new FormControl(this.hero.name, [
  //     Validators.required,
  //     Validators.minLength(4),
  //   ])
  // });

  // public showAlert(): void {
  //   alert('ngx-loading rocks!');
  // }


   }
}
