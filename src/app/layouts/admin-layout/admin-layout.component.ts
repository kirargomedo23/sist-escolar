import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {


  routes = [
    { path: 'dashboard', title: 'Dashboard t2',  icon: 'dashboard', class: '' },
    { path: 'user-profile', title: 'User Profile t2',  icon:'person', class: '' },
    { path: 'table-list', title: 'Table List t2',  icon:'content_paste', class: '' },
    { path: 'typography', title: 'Typography t2',  icon:'library_books', class: '' },
    { path: 'icons', title: 'Icons t',  icon:'bubble_chart', class: '' }, 
  ]

  constructor( ) {}

  ngOnInit() {

  }

  ngAfterViewInit() {

  }


}
