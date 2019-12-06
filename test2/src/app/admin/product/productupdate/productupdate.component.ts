import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productupdate',
  templateUrl: './productupdate.component.html',
  styleUrls: ['./productupdate.component.scss']
})
export class ProductupdateComponent implements OnInit {

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
 
}
