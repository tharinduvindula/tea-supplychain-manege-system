import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormArray } from '@angular/forms';
import { AdminserviceService } from 'app/service/adminservice.service';

@Component({
  selector: 'app-oneuser',
  templateUrl: './oneuser.component.html',
  styleUrls: ['./oneuser.component.scss']
})
export class OneuserComponent implements OnInit {
  form = {
    email: null,
    telephone: null,
    name: null,
    photo: null,
    type: null,
  };
  item:FormArray

  constructor(private router:Router, private service:AdminserviceService, private Activatedroute:ActivatedRoute, private formBuilder: FormBuilder,) { 
    this.getadmin(this.Activatedroute.snapshot.queryParamMap.get('email'));
  }

  ngOnInit() {
    this.item = this.formBuilder.array([]);
  }
  async getadmin(email){
    console.log(email)
    await this.service.getAdmin(email).then(val => {
      if (val[5] !== '4') {
        console.log(val)
        this.form.name = val[1].split('#')[1];
        this.form.email = val[1].split('#')[0];
        this.form.telephone = val[1].split('#')[3];
        this.form.type= val[1].split('#')[4];
      }
    });
  }
}
