import { Component, OnInit, Input } from "@angular/core";
import {FormGroup, FormBuilder} from "@angular/forms";
import { Task } from "../../models/task";

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
  taskFormGroup : FormGroup;
  

  constructor(private builder : FormBuilder) {
    this.taskFormGroup = builder.group(
      name: builder.control("");
    );
  }

  ngOnInit() : void {}
}
