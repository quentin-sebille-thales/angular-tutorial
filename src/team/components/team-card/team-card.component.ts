import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Team } from "../../models/team";

@Component({
  selector: "app-team-card",
  templateUrl: "./team-card.component.html",
  styleUrls: ["./team-card.component.css"]
})
export class TeamCardComponent implements OnInit {
  /**
   * Nom de l'équipe
   */
  @Input() team: Team;
  /**
   * Le composant doit-il être affiché ?
   */
  displayComponent: boolean;
  /**
   * Evénement emis lors de l'évaluation de l'équipe.
   */
  @Output() evaluate: EventEmitter<Team>;

  constructor() {
    console.log("Equipe (Constructor) : " + this.team);
    this.displayComponent = true;
    this.evaluate = new EventEmitter();
  }

  ngOnInit(): void {
    console.log("Equipe (OnInit) : " + this.team);
    this.displayComponent = this.team !== null && this.team !== undefined;
  }

  /**
   * Action déclenchée lors du clic sur le bouton "Evaluer"
   */
  onClickEvaluate(): void {
    this.evaluate.emit(this.team);
  }

}
