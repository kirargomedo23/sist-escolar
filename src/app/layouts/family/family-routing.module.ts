import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyComponent } from './family.component';

const routes: Routes = [{
  path: '',
  component: FamilyComponent,
  children: [
    {
      path: 'my-account',
      loadChildren: () => import('./my-account/account.module').then(m => m.AccountModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilyRoutingModule { }
