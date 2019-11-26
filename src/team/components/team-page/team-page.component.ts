import { Component, OnInit } from "@angular/core";
import { TeamService } from "../../services/team.service";
import { Team } from "../../models/team";
import { TeamDomain } from "../../models/team-domain.enum";

@Component({
  selector: "app-team-page",
  templateUrl: "./team-page.component.html",
  styleUrls: ["./team-page.component.css"]
})
export class TeamPageComponent implements OnInit {
  /**
   * Informations sur l'équipe Quiproquos
   */
  teamQuiproquos: Team;
  /**
   * Informations sur l'équipe Tricoteuses
   */
  teamTricoteuses: Team;
  /**
   * Message à propos d'une équipe
   */
  evaluationMessage: string;

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamQuiproquos = new Team(
      1,
      "Quiproquos",
      "Une super équipe !",
      TeamDomain.Offre
    );
    this.teamTricoteuses = new Team(
      2,
      "Tricoteuses",
      "Les plus grands fans de Nicolas Copernic",
      TeamDomain.Offre
    );
    this.teamService.refreshTeamList();
  }

  displayEvaluation(team: Team): void {
    this.evaluationMessage = this._evaluateTeam(team);
  }

  /**
   * Renvoie un message à propos d'une équipe
   */
  private _evaluateTeam(team: Team): string {
    if (team.id == 2) {
      return "Certains membres sont des professionnels de la roue (vidéo à l'appui)";
    }

    return "Pas de rumeur sur cette équipe";
  }
}
