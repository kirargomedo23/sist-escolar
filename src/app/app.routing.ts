import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';



const routes: Routes =[
  /* {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  } */
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
      },
      {
        path: 'sist',
        component: AdminLayoutComponent,
        children: [{
          path: '',
          loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
        }]
      },
      {
        path: 'teacher',
        loadChildren:() => import('./layouts/teacher/teacher.module').then(m => m.TeacherModule)
      },
      {
        path: 'student',
        loadChildren:() => import('./layouts/student/student.module').then(m => m.StudentModule)
      },
      {
        path: 'family',
        loadChildren:() => import('./layouts/family/family.module').then(m => m.FamilyModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
