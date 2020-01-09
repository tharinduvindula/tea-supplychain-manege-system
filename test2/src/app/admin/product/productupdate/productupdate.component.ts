import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productupdate',
  templateUrl: './productupdate.component.html',
  styleUrls: ['./productupdate.component.scss']
})
export class ProductupdateComponent implements OnInit {
  public form = {
    productName: null,
    type: null,
    flaver: null,
    weight: null,
    price: null
  };
  error;

  constructor() {}

  ngOnInit() {
  }
  onsubmit() {
    console.log(this.form)
  }
 
}
