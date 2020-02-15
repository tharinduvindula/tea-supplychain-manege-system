import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneorder',
  templateUrl: './oneorder.component.html',
  styleUrls: ['./oneorder.component.scss']
})
export class OneorderComponent implements OnInit {

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

  down1() {
    let printContents = document.getElementById('print-section1').innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    
    window.location.reload();
  }
  down2() {
    let printContents = document.getElementById('print-section2').innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    
    window.location.reload();
  }


}
