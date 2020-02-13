import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { EstateserviceService } from 'app/service/estateservice.service';

@Component({
  selector: 'app-estate',
  templateUrl: './estate.component.html',
  styleUrls: ['./estate.component.scss']
})

export class EstateComponent implements OnInit {
  items: FormArray;

  constructor(private service: EstateserviceService,private formBuilder: FormBuilder) {
    this.create();
  }

  
  ngOnInit() {
    this.items = this.formBuilder.array([]);
  }

  async create() {
    let x;
    let i;
    await this.service.getEstateCount().then(val => x = val)
    for (i = 0; i < x; i++) {
      await this.service.getEstatei(i).then(val => {
        this.items.push(this.formBuilder.group({
          estateName: val[1].split('#')[1],
          Photo: val[2].split('#')[1],
          rate: val[6]

        }));
      });
    }
  }
}
