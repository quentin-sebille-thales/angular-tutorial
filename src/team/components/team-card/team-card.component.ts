import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-team-card",
  templateUrl: "./team-card.component.html",
  styleUrls: ["./team-card.component.css"]
})
export class TeamCardComponent implements OnInit {
  /**
   * Nom de l'équipe
   */
  @Input() teamName: string;
  /**
   * Le composant doit-il être affiché ?
   */
  displayComponent: boolean;

  constructor() {
    console.log("Nom de l'équipe (Constructor) : " + this.teamName);
    this.displayComponent = true;
  }

  ngOnInit(): void {
    console.log("Nom de l'équipe (OnInit) : " + this.teamName);
    this.displayComponent =
      this.teamName !== null &&
      this.teamName !== undefined &&
      this.teamName !== "";
  }

/**
 * Action déclenchée lors du clic sur le bouton "Evaluer"
 */
  onClickEvaluate(): void {
    
  }


}
