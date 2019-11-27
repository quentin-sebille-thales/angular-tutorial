import { Injectable } from "@angular/core";
import { Task } from "../models/task";

@Injectable()
export class TaskService {
  list: Task[];

  constructor() {
    this.list = [];
  }

  pubaddTask(task: Task): void {
    this.list.push(task);
  }
}
