import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: '/product', title: 'Products', icon: 'local_cafe', class: '' },
  { path: '/distributor', title: 'Distributors', icon: 'local_shipping', class: '' },
  { path: '/otheruser', title: 'Other Users', icon: 'supervised_user_circle', class: '' },
  { path: '/estate', title: 'Estates', icon: 'spa', class: '' },
  { path: '/order', title: 'Orders', icon: 'directions_boat', class: '' },
  { path: '/user-profile', title: 'Edit User Profile', icon: 'build', class: '' },
];

@Component({
  selector: 'app-managersidebar',
  templateUrl: './managersidebar.component.html',
  styleUrls: ['./managersidebar.component.scss']
})
export class ManagersidebarComponent implements OnInit {
  menuItems: any[];

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    /*this.data.changeBool.subscribe(maz=>{
      if(maz ==! this.showFiller){
      }
    })*/
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };

}
