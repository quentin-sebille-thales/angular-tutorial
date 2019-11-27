import { Injectable } from "@angular/core";
import { Task } from "../models/task";

@Injectable()
export class TaskService {
  list: Task[];
  /**
   * Tâche en cours d'ajout ou d'édition
   */
  currentTask: Task;

  constructor() {
    this.list = [];
  }

/**
 * Ajoute une tâche dans la liste du service
 */
  public addTask(): void {
    this.currentTask = new Task();
    this.currentTask.id = this.list.length;
    this.list.push(this.currentTask);
  }

}
