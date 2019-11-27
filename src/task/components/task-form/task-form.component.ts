import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Task } from "../../models/task";
import { TaskFormGroup } from "../../models/task-form-group";

@Component({
  selector: "app-task-form",
  templateUrl: "./task-form.component.html",
  styleUrls: ["./task-form.component.css"]
})
export class TaskFormComponent implements OnInit {
  /**
   * Tâche servant à l'initialisation du formulaire.
   */
  @Input() task: Task;
  /**
   * FormGroup
   */
  taskFormGroup: TaskFormGroup;

  constructor(private builder: FormBuilder) {
    this.taskFormGroup = new TaskFormGroup();
  }

  ngOnInit(): void {
    this.taskFormGroup.loadControlsFromTask(this.task);
  }
}