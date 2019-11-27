import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {
  displayAddTaskForm: boolean;

  constructor(public taskService: TaskService) {
    this.displayAddTaskForm = false;
   }

  ngOnInit() : void {
  }

/**
 * Action déclenchée lors du clic sur le bouton "Ajouter une tâche"
 */
  onClickAddTask(): void {
    this.displayAddTaskForm = true;
    this.taskService.addTask();
  }

}