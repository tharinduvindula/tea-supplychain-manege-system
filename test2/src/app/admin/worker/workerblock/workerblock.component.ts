import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-workerblock',
  templateUrl: './workerblock.component.html',
  styleUrls: ['./workerblock.component.scss']
})
export class WorkerblockComponent implements OnInit {

  items: FormArray;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.items = this.formBuilder.array([]);
  }

  setValue(x,y){

  }
  isMobileMenu() {
    if (screen.width > 991) {
      return false;
    }
    return true;
  }

}
