import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'sist/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: 'sist/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: 'sist/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: 'sist/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: 'sist/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    
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
