import { Routes } from "@angular/router";
import { TeamPageComponent } from "../team/components/team-page/team-page.component";
import { TaskPageComponent } from "../task/components/task-page/task-page.component";

export const routes: Routes = [
  { path: "", redirectTo: "/ta", pathMatch: "full" },
  { path: "team", component: TeamPageComponent },
  { path: "task", component: TaskPageComponent }
];
