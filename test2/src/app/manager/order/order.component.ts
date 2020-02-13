import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  href;

  constructor() {
   }

  ngOnInit() {
  }

  isMobile() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };

  down(){
    this.href = document.getElementsByTagName('ngx-qrcode')[0].innerHTML;
    console.log(this.href)
    window.print();
  }


}
