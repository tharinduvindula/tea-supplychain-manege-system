import { Component, OnInit, HostListener, NgZone, Inject } from '@angular/core';
import { EthcontractService } from 'app/web3-servise/ethcontract.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

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

  constructor(private ethcontractService: EthcontractService) {
    // this.initAndDisplayAccount();
  }

  login() {
    this.ethcontractService.login(this.form.email, this.form.password)
  }

}
