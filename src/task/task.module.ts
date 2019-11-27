import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from './task-card/task-card.component';
import { TaskPageComponent } from './task-page/task-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TaskCardComponent, TaskPageComponent]
})
export class TaskModule { }