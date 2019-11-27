export {
  FormGroup,
  FormControl,
  AbstractControlOptions,
  AsyncValidatorFn,
  ValidatorFn,
  Validators
} from "@angular/forms";

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
    const controls = {
      name : new FormControl('', Validators.required),
      description: new FormControl(''),
      difficulty: new FormControl(0)
    }
    super(controls, validatorOrOpts, asyncValidator);
  }

}
