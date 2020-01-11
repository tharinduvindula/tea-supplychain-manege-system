import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-workeredit',
  templateUrl: './workeredit.component.html',
  styleUrls: ['./workeredit.component.scss']
})
export class WorkereditComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  items: FormArray;
  ngOnInit() {
    this.items = this.formBuilder.array([]);
  }

  onedit(x,y){

  }

  ondelete(x, y){
    
  }

}
