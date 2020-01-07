import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line: member-ordering
  form = {
    email: '',
    password: ''
  };


}
