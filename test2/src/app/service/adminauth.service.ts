import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  canActivate() {
    let adminuser: boolean ;
    if(localStorage.getItem('key') === '11' ){
      adminuser = true
      return true;
    }
    else {
      adminuser =false;
      return false;
      
    }
    // if (!adminuser) {
    //   this.router.navigate(['/admin']);
    // }
    // return adminuser;
  }
  constructor(private router: Router) { }

}
