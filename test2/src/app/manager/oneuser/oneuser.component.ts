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
        console.log(val)
        this.form.name = val[2].split('#')[0],
        this.form.photo= val[2].split('#')[1],
        this.form.email = val[1].split('#')[0];
        this.form.telephone = val[3].split('#')[0];
      
    });
  }
}
