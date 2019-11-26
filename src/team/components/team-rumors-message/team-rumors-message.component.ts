import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-team-rumors-message",
  templateUrl: "./team-rumors-message.component.html",
  styleUrls: ["./team-rumors-message.component.css"]
})
export class TeamRumorsMessageComponent {
  @Input() rumorsMessage: string;

  constructor() {}
}
