import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  routes = [
    { path: 'dashboard', title: 'Dashboard t1',  icon: 'dashboard', class: '' },
    { path: 'user-profile', title: 'User Profile t',  icon:'person', class: '' },
    { path: 'table-list', title: 'Table List t',  icon:'content_paste', class: '' },
    { path: 'typography', title: 'Typography t',  icon:'library_books', class: '' },
    { path: 'icons', title: 'Icons t',  icon:'bubble_chart', class: '' }, 
  ]

}
