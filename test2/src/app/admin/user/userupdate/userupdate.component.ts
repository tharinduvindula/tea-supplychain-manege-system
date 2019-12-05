import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.scss']
})
export class UserupdateComponent implements OnInit {

  constructor() { }
  public form = {
    name: null, 
    email: null,
    telephone: null,
    
  };

  ngOnInit() {
  }

}
