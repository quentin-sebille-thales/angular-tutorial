import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Task } from "../../models/task";
import { TaskFormGroup } from "../../models/task-form-group";
import {TaskService} from "../../services/task.service";

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
  @Output() closure: EventEmitter<any>;

  constructor(private builder: FormBuilder, private taskService: TaskService) {
    this.taskFormGroup = new TaskFormGroup();
    this.closure = new EventEmitter();
  }

  ngOnInit(): void {
    this.taskFormGroup.loadControlsFromTask(this.task);
  }

  onClickValidate(): void {
    console.log(this.taskFormGroup.saveTask());
    this.taskService.addTask(this.taskFormGroup.saveTask())
    this.closure.emit();
  }

  onClickCancel(): void {
    this.closure.emit();
  }
}
