import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleClassComponent } from './schedule-class.component';
import {MatTableModule} from '@angular/material/table'; 
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    ScheduleClassComponent
  ],
  imports: [
    CommonModule,
    MatTableModule, MatGridListModule
  ],
  exports: [ ScheduleClassComponent ]
})
export class ScheduleClassModule { }
