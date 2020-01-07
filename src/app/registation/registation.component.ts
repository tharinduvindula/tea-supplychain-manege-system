import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registation',
  templateUrl: './registation.component.html',
  styleUrls: ['./registation.component.scss']
})
export class RegistationComponent implements OnInit {

  constructor() { }

  form = {
    email: '',
    password: ''
  };

  ngOnInit() {
  }

}
