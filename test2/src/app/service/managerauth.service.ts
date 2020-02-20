import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerauthService {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    let manageruser: boolean;
    if( localStorage.getItem('key') === '12'){
      manageruser = true;
    }
    else{
      manageruser =false;
    }
    // if not, redirect to /pagenotfound
    if (!manageruser) {
      this.router.navigate(['/']);
    }
    return manageruser;
  }
  constructor(private router: Router) { }
}
