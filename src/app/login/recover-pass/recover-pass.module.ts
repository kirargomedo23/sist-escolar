import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoverPassRoutingModule } from './recover-pass-routing.module';
import { RecoverPassComponent } from './recover-pass.component';


@NgModule({
  declarations: [
    RecoverPassComponent
  ],
  imports: [
    CommonModule,
    RecoverPassRoutingModule
  ]
})
export class RecoverPassModule { }
