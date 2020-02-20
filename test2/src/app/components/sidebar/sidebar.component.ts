import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Location} from '@angular/common';
import { Router } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

// admin main sidebar menu content
export const ROUTES: RouteInfo[] = [
  { path: '/admin/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: '/admin/product', title: 'Products', icon: 'local_cafe', class: '' },
  { path: '/admin/distributor', title: 'Distributors', icon: 'local_shipping', class: '' },
  { path: '/admin/worker', title: 'Workers', icon: 'supervised_user_circle', class: '' },
  { path: '/admin/estate', title: 'Estates',  icon: 'spa', class: '' },
  { path: '/admin/order', title: 'Orders', icon: 'directions_boat', class: '' },
  { path: '/admin/user', title: 'Users', icon: 'person', class: '' },
  { path: '/admin/user-profile', title: 'Edit User Profile', icon: 'build', class: '' },
];

// admin mini sidebar product sub menu content
export const product: RouteInfo[] = [
  { path: '/admin/product/add', title: 'products add', icon: 'add_shopping_cart', class: '' },
  { path: '/admin/product/view', title: 'products view', icon: 'emoji_food_beverage', class: '' },
  { path: '/admin/product/edit', title: 'products edit', icon: 'edit', class: '' },
  { path: '/admin/product/progress', title: 'progress of products', icon: 'assessment', class: '' },
];

// admin mini sidebar distributor sub menu content
export const distributor: RouteInfo[] = [
  { path: '/admin/distributor/add', title: 'Distributors add', icon: 'add_box', class: '' },
  { path: '/admin/distributor/view', title: 'Distributors view', icon: 'ballot', class: '' },
  { path: '/admin/distributor/edit', title: 'Distributors edit', icon: 'edit', class: '' },
  { path: '/admin/distributor/progress', title: 'Progress of Distributors', icon: 'assessment', class: '' },
  { path: '/admin/distributor/block', title: 'Tempory block', icon: 'phonelink_off', class: '' },
];

// admin mini sidebar worker sub menu content
export const worker: RouteInfo[] = [
  { path: '/admin/worker/add', title: 'workers add', icon: 'group_add', class: '' },
  { path: '/admin/worker/view', title: 'workers view', icon: 'group', class: '' },
  { path: '/admin/worker/edit', title: 'workers edit', icon: 'edit', class: '' },
  { path: '/admin/worker/block', title: 'tempory block', icon: 'phonelink_off', class: '' },
];

// admin mini sidebar estate sub menu content
export const estate: RouteInfo[] = [
  { path: '/admin/estate/add', title: 'estates add', icon: 'nature', class: '' },
  { path: '/admin/estate/view', title: 'estates view', icon: 'nature_people', class: '' },
  { path: '/admin/estate/edit', title: 'estates edit', icon: 'edit', class: '' },
  { path: '/admin/estate/progress', title: 'progress of estates', icon: 'assessment', class: '' },
];

// admin mini sidebar  order sub menu content
export const order: RouteInfo[] = [
  { path: '/admin/order/view', title: 'orders view', icon: 'public', class: '' },
  { path: '/admin/order/add', title: 'orders add', icon: 'edit', class: '' },
  { path: '/admin/order/delete', title: 'orders delete', icon: 'edit', class: '' },
  // { path: '/admin/order/add', title: 'blendSheets delete', icon: 'edit', class: '' },
  { path: '/admin/order/summary', title: 'summary of orders', icon: 'assignment', class: '' },
];

// admin mini sidebar user sub menu content
export const user: RouteInfo[] = [
  { path: '/admin/user/add', title: 'users add', icon: 'person_add', class: '' },
  { path: '/admin/user/view', title: 'users view', icon: 'person_pin', class: '' },
  { path: '/admin/user/edit', title: 'users edit', icon: 'edit', class: '' },
  { path: '/admin/user/block', title: 'tempory block', icon: 'phonelink_off', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  sideItems: any[];
  showFiller = false;
  opensidebar = false;
  opened: any = false;
  aftermini: any;
  private listTitles: any[];
  location: Location;

  @ViewChild('drawer') drawer: any;

  constructor(private router: Router, location: Location) {
    this.location = location;
   }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    /*this.data.changeBool.subscribe(maz=>{
      if(maz ==! this.showFiller){
      }
    })*/
  }

  // listning esc butone press
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (this.opened) {
      this.drawer.close();
      this.opened = false;
    }
  }

  // check opninig window is mobile window
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

  // controle mini side bar
  minisidebar(mini) {

    if (mini === '/admin/dashboard') {

      // user select dashboard
      this.drawer.close();
      this.opened = false;
      this.aftermini = mini;

    } else if (mini === '/admin/user-profile') {

      // user select userprofile
      this.drawer.close();
      this.opened = false;
      this.aftermini = mini;

    } else if (mini === this.aftermini && this.opened) {

      // when mini side bar open and user select that mini bar catogry, then close mini sidebar
      this.drawer.close();
      this.opened = false;
      this.aftermini = '';

    }  else {

      // when user select other catogery, then mini side bar open using that menu
      this.aftermini = mini;
      if (mini === '/admin/product') {
        this.sideItems = product.filter(sideItem => sideItem);
      } else if (mini === '/admin/distributor') {
        this.sideItems = distributor.filter(sideItem => sideItem);
      } else if (mini === '/admin/worker') {
        this.sideItems = worker.filter(sideItem => sideItem);
      } else if (mini === '/admin/estate') {
        this.sideItems = estate.filter(sideItem => sideItem);
      } else if (mini === '/admin/order') {
        this.sideItems = order.filter(sideItem => sideItem);
      } else if (mini === '/admin/user') {
        this.sideItems = user.filter(sideItem => sideItem);
      }
    this.opened = true;
    this.drawer.open();
    }
    // console.clear();
  }

  // get current window titel
  getTitle() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(2);
    }
    titlee = titlee.split('/')[1];
    for (let item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        console.log(this.listTitles[item].title);
      }
    }
    return '/' + titlee;
  }

  // mini side bar close
  closesidebar() {
    this.drawer.close();
    this.opened = false;
  }

}
