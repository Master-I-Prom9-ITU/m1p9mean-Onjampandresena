import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'e_kaly/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: 'e_kaly/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: 'e_kaly/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: 'e_kaly/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: 'e_kaly/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: 'e_kaly/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: 'e_kaly/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: 'e_kaly/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
