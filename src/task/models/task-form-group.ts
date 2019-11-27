import {
  FormGroup,
  FormControl,
  AbstractControlOptions,
  AsyncValidatorFn,
  ValidatorFn,
  Validators
} from "@angular/forms";
import { Task } from "./task";

export class TaskFormGroup extends FormGroup {
  controls: {
    name: FormControl;
    description: FormControl;
    difficulty: FormControl;
  };

  constructor(
    validatorOrOpts?:
      | ValidatorFn
      | ValidatorFn[]
      | AbstractControlOptions
      | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ) {
    /**
     * Validateurs de la difficulté d'une tâche (doit être entre 0 et 10)
     */
    const difficultyValidators = [Validators.min(0), Validators.max(10)];

    const controls = {
      name: new FormControl("", Validators.required),
      description: new FormControl(""),
      difficulty: new FormControl(0, difficultyValidators)
    };
    super(controls, validatorOrOpts, asyncValidator);
  }

  /**
   * Charge les controles à partir d'une tâche
   */
  loadControlsFromTask(task: Task): void {
    if (task.name !== undefined) {
      this.controls.name.setValue(task.name);
    }
    if (task.description !== undefined) {
      this.controls.description.setValue(task.description);
    }
    if (task.difficulty !== undefined) {
      this.controls.difficulty.setValue(task.difficulty);
    }
  }
}
