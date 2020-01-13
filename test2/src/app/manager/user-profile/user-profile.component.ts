import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public form = {
    name: null,
    email: null,
    telephone: null,
    photo: null,
    usertype: null

  };
  error;
  email;
  constructor() { }

  yourOnUploadHandler(x) {
  }

  ngOnInit() {
  }
  onsubmit() {
    console.log(this.form)
  }
}