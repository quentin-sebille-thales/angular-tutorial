import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskPageComponent } from "./components/task-page/task-page.component";

@NgModule({
  imports: [CommonModule],
  declarations: [TaskPageComponent],
  exports: [TaskPageComponent]
})
export class TaskModule {}
