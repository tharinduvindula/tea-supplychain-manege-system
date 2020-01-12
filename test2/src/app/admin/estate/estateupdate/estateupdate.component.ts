import { Component, OnInit, ViewChild } from '@angular/core';
import { EstateserviceService } from 'app/service/estateservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-estateupdate',
  templateUrl: './estateupdate.component.html',
  styleUrls: ['./estateupdate.component.scss']
})
export class EstateupdateComponent implements OnInit {
  @ViewChild('estateEditForm') formValues;
  public form = {
    estateId: null,
    estateName: null,
    photo: null,
    contactNumber: null,
    address: null,
    email: null,
    ownerName: null,
  };
  public form1 = {
    estateId: null,
    estateName: null,
    photo: null,
    contactNumber: null,
    address: null,
    email: null,
    ownerName: null,
  };
  public form2 = {
    email: null
  };
  error: null;


  // tslint:disable-next-line: max-line-length
  constructor(private service: EstateserviceService, private Activatedroute: ActivatedRoute, private router: Router/*, private addDemoService: AddDemoService, private Token: TokenService, private User: UserService*/) {

    // this.addingby = this.Token.payload(this.Token.gettoken()).ud.fullname;
    // this.adddistributor('tv@gmail.com', 'tv');
    this.getEstate(this.Activatedroute.snapshot.queryParamMap.get('estateName'));
  }

  ngOnInit() {
  }

  yourOnUploadHandler(info) {
    console.log('fired Event "onUpload"');
    console.log(info);
    this.form.photo = info.cdnUrl;
  }

  async onsubmit() {
    const estateName = this.form.estateId + '#' + this.form.estateName
    const address = this.form.address + '#' + this.form.photo;
    const contactNumberAndEmail = this.form.contactNumber + '#' + this.form.email;
    // tslint:disable-next-line: max-line-length
    if (this.form1.address === this.form.address && this.form1.photo === this.form.photo && this.form1.contactNumber === this.form.contactNumber && this.form1.email === this.form.email && this.form1.ownerName === this.form.ownerName) {
      this.router.navigateByUrl('/admin/estate/edit');
    }
    // tslint:disable-next-line: max-line-length
    else if ((this.form1.address !== this.form.address || this.form1.photo !== this.form.photo) && this.form1.contactNumber === this.form.contactNumber && this.form1.email === this.form.email && this.form1.ownerName === this.form.ownerName) {
      await this.service.updateEstateAddress(estateName, address).then(
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
      this.router.navigateByUrl('/admin/estate/view');
    }
    // tslint:disable-next-line: max-line-length
    else if (this.form1.address === this.form.address && this.form1.photo === this.form.photo && (this.form1.contactNumber !== this.form.contactNumber || this.form1.email === this.form.email) && this.form1.ownerName === this.form.ownerName) {

      await this.service.updateEstateContactnumberAndEmail(estateName, contactNumberAndEmail).then(
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
      this.router.navigate(['/admin/estate/view']);
    }
    // tslint:disable-next-line: max-line-length
    else if (this.form1.address === this.form.address && this.form1.photo === this.form.photo && this.form1.contactNumber === this.form.contactNumber && this.form1.email === this.form.email && this.form1.ownerName !== this.form.ownerName) {
      await this.service.updateEstateOwnerName(estateName, this.form.ownerName).then(
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
      this.router.navigate(['/admin/estate/view']);
    } else {
      const arr: number[] = [];
      if (this.form1.address !== this.form.address || this.form1.photo !== this.form.photo) {
        arr.push(1);
      } else {
        arr.push(0);
      }
      if (this.form1.contactNumber !== this.form.contactNumber || this.form1.email !== this.form.email) {
        arr.push(2);
      } else {
        arr.push(0);
      }
      if (this.form1.ownerName !== this.form.ownerName) {
        arr.push(3);
      } else {
        arr.push(0);
      }

      await this.service.updateEstate(estateName, arr, address, this.form.ownerName, contactNumberAndEmail,).then(
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
      this.router.navigate(['/admin/estate/view']);
    }
  }

  handleError(error) {
    this.error = error.error.error;
  }

  async getEstate(estateName) {
    await this.service.getEstate(estateName).then(val => {
      if (val[4] !== '4') {
        this.form.estateId = val[1].split('#')[0];
        this.form1.estateId = val[1].split('#')[0];
        this.form.estateName = val[1].split('#')[1];
        this.form1.estateName = val[1].split('#')[1];
        this.form.address = val[2].split('#')[0];
        this.form1.address = val[2].split('#')[0];
        this.form.photo = val[2].split('#')[1],
        this.form1.photo = val[2].split('#')[1],
        this.form.ownerName = val[3],
        this.form1.ownerName = val[3],
        this.form.contactNumber = val[4].split('#')[0],
        this.form1.contactNumber = val[4].split('#')[0],
        this.form.email = val[4].split('#')[1]
        this.form1.email = val[4].split('#')[1]
      }
    });
  }
}


