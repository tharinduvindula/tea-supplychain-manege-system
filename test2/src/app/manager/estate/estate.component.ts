import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estate',
  templateUrl: './estate.component.html',
  styleUrls: ['./estate.component.scss']
})
export class EstateComponent implements OnInit {



  estate_name: string;
  estate_owner: string;
  estate_city: string;
  estate_contact_number: number;
  estate_location: string;



  constructor() { }

  ngOnInit() {
  }

}
