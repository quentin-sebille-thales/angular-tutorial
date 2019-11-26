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
   * Evénement émis lors du clic sur le bouton Selectionner
   */
  @Output() onSelect: EventEmitter<string>;

  constructor() {
    console.log("Equipe (Constructor) : " + this.team);
    this.displayComponent = true;
    this.onSelect = new EventEmitter();
  }

  ngOnInit(): void {
    console.log("Equipe (OnInit) : " + this.team);
    this.displayComponent = this.team !== null && this.team !== undefined;
  }

  /**
   * Action déclenchée lors du clic sur le bouton "Rumeurs"
   */
  onClickSelect(): void {
    this.onSelect.emit(this.team.name);
  }

}
