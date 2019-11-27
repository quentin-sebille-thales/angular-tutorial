import { Routes } from "@angular/router";
import { TaskPageComponent } from "../task/components/task-page/task-page.component";

export const routes: Routes = [
  { path: "", redirectTo: "/task", pathMatch: "full" },
  { path: "task", component: TaskPageComponent }
];
