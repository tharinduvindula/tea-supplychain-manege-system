import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.scss']
})
export class UserupdateComponent implements OnInit {

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
