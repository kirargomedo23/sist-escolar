import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher.component';

const routes: Routes = [{
  path: '',
  component: TeacherComponent,
  children: [
    {
      path: '',
      loadChildren : () => import('./my-account/account.module').then(m => m.AccountModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
