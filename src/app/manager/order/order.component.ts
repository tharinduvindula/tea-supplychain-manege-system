import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isMobile() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };

}
