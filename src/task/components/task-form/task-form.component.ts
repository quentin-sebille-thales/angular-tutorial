import { Component, OnInit, Input } from "@angular/core";
import { Task } from "../../models/task";

@Component({
  selector: "app-task-form",
  templateUrl: "./task-form.component.html",
  styleUrls: ["./task-form.component.css"]
})
export class TaskFormComponent implements OnInit {
  @Input() task: Task;

  constructor() {}

  ngOnInit() : void {}
}
