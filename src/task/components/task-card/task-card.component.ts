import { Component, OnInit, Input } from "@angular/core";

import { Task } from "../../models/task";

@Component({
  selector: "app-task-card",
  templateUrl: "./task-card.component.html",
  styleUrls: ["./task-card.component.css"]
})
export class TaskCardComponent implements OnInit {
  @Input() task: Task;
  displayTask: boolean;
  displayTaskName: boolean;

  constructor() {
    this.displayTask = false;
    this.displayTaskName = false;
  }

  ngOnInit(): void {
    this.displayTask = this.task !== null && this.task !== undefined;
    this.displayTaskName =
      this.displayTask &&
      this.task.name !== null &&
      this.task.name !== undefined &&
      this.task.name !== "";
  }
}
