import { Component, OnInit } from '@angular/core';
import { EstateserviceService } from 'app/service/estateservice.service';
import { FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estateedit',
  templateUrl: './estateedit.component.html',
  styleUrls: ['./estateedit.component.scss']
})
export class EstateeditComponent implements OnInit {
  public form1 = {
    email: null
  }
  form = {
    estateName: null,
    estateNameCode: null,
    name: null,
    photo: null,
    userAccess: null,
  };
  items: FormArray;
  constructor(private service: EstateserviceService, private formBuilder: FormBuilder, private router: Router) {

  }

  ngOnInit() {
    this.items = this.formBuilder.array([]);
    this.create();
  }
  isMobileMenu() {
    if (screen.width > 991) {
      return false;
    }
    return true;
  }
  onedit(event, estateName) {
    event.preventDefault();
    this.form.estateName = estateName;
    this.router.navigate(['/admin/estate/update'], { queryParams: { estateName: estateName } });
  }
  async ondelete(event, email) {
    event.preventDefault();
    await this.service.deleteEstate(email).then(
      data => {
        if (data != null) {
          console.log(data)
        }

      },
      error => {
        // this.handleError(error)
        if (error != null) {
          console.log(error)
        }
      }

    );
    this.items = null;
    this.items = this.formBuilder.array([]);
    this.create();
  }

  async create() {
    let x;
    let i;
    await this.service.getEstateCount().then(val => x = val)
    for (i = 0; i < x; i++) {

      await this.service.getEstatei(i).then(val => {
        console.log(val)
        if (val[5] !== '4') {
          this.items.push(this.formBuilder.group({
            estateId: val[1].split('#')[0],
            estateName: val[1].split('#')[1],
            estateNamei: val[1],
            estateNameCode: val[0],
            photo: val[2].split('#')[1],
            userAccess: val[5]
          }));
        }
      });
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
