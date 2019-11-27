import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AngularMaterialModule } from "../angular-material/angular-material.module";

import { TaskPageComponent } from "./components/task-page/task-page.component";
import { TaskService } from './services/task.service';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

@NgModule({
  imports: [CommonModule, AngularMaterialModule],
  declarations: [TaskPageComponent, TaskCardComponent, TaskFormComponent],
  exports: [TaskPageComponent],
  providers: [TaskService]
})
export class TaskModule {}
