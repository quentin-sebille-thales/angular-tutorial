import { Injectable } from "@angular/core";
import { Task } from "../models/task";

@Injectable()
export class TaskService {
  list: Task[];

  constructor() {
    this.list = [];
    this.list.push(new Task());
    this.list.push(new Task());
    this.list[0].id = 0;
    this.list[0].name = "Faire la roue";
    this.list[0].description = "Aller voir Michaël Ayeng pour apprendre"
    this.list[0].difficulty = 6;
    this.list[1].id = 1;
    this.list[1].name = "Apporter les croissants";
    this.list[1].description = "Ca fait toujours plaisir aux collègues de temps en temps"
    this.list[1].difficulty = 2;
  }

  public addTask(task: Task): void {
    this.list.push(task);
  }
}
