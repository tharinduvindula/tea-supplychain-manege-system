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

<<<<<<< HEAD
  constructor() {}

  ngOnInit() {
  }
  onsubmit() {
  }

=======
  constructor(){}
  public form = {
    productName: null,
    type: null,
    flaver: null,
    weight: null,
    price: null
  };

  ngOnInit() {
  }
 
>>>>>>> 94c66129f3ab29bdbf2ef5e8714ccbcbe2633c9f
}
