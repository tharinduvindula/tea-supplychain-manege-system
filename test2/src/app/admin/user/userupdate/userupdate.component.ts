import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.scss']
})
export class UserupdateComponent implements OnInit {

<<<<<<< HEAD
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
  }
=======
  constructor() { }
  public form = {
    name: null, 
    email: null,
    telephone: null,
    
  };

  ngOnInit() {
  }
>>>>>>> 94c66129f3ab29bdbf2ef5e8714ccbcbe2633c9f

}
