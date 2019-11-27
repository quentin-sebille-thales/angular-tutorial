import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AngularMaterialModule } from "../angular-material/angular-material.module";

import { TaskPageComponent } from "./components/task-page/task-page.component";
import { TaskService } from './services/task.service';

@NgModule({
  imports: [CommonModule, AngularMaterialModule],
  declarations: [TaskPageComponent],
  exports: [TaskPageComponent],
  providers: [TaskService]
})
export class TaskModule {}
