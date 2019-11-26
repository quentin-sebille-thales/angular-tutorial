import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-team-evaluation-message",
  templateUrl: "./team-evaluation-message.component.html",
  styleUrls: ["./team-evaluation-message.component.css"]
})
export class TeamEvaluationMessageComponent {
  @Input() evaluationMessage: string;

  constructor() {}
}
