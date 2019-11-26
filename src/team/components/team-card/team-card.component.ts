import { Component, OnInit, Input } from "@angular/core";
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

  constructor() {
    console.log("Nom de l'équipe (Constructor) : " + this.team.name);
    this.displayComponent = true;
  }

  ngOnInit(): void {
    console.log("Nom de l'équipe (OnInit) : " + this.team.name);
    this.displayComponent =
      this.team !== null &&
      this.team !== undefined;
  }

/**
 * Action déclenchée lors du clic sur le bouton "Evaluer"
 */
  onClickEvaluate(): void {

  }


}
