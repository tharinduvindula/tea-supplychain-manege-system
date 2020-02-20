import { Component, OnInit, HostListener, NgZone, Inject } from '@angular/core';
import { EthcontractService } from 'app/web3-servise/ethcontract.service';
import 'rxjs';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminserviceService } from 'app/service/adminservice.service';
import { Router } from '@angular/router';
import { ManagerserviceService } from 'app/service/managerservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loggedin;
  heroForm: FormGroup;

  form = {
    email: '',
    password: ''
  };
  error = '';

  constructor(
    private ethcontractService: EthcontractService, private adminservice: AdminserviceService,
     private router: Router, private managerservice: ManagerserviceService) {
  }


  async login() {
    console.log(Date.now() / 1000)
    await this.ethcontractService.login({ _userName: this.form.email, _password: this.form.password }).then(
      async data => {
        console.log(data);
        await this.adminservice.isUserAdmin(this.form.email).then(
          data1 => {
            console.log(data1);
            if (data1 === true) {
              localStorage.setItem('key', '11'); 
              this.router.navigateByUrl('/admin');
            } else {
              localStorage.setItem('key', '12'); 
              this.router.navigateByUrl('/');
            }
          }, error => {
            console.log(true);
          });
        },
      async error => {
        console.log(error);
          this.handleError(error);
      }
    );
    console.log(Date.now() / 1000)
  }

  handleError(error) {
    this.error = error;

  }
   
   ngOnInit(): void {
    // this.Auth.authStatus.subscribe(value => this.loggedin = value)
  // this.heroForm = new FormGroup({
  //   'email': new FormControl(this.hero.name, [
  //     Validators.required,
  //     Validators.minLength(4),
  //   ])
  // });




   }
    public showAlert(): void {
    alert('ngx-loading rocks!');
  }
}
