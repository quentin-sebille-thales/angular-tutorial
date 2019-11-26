import { Injectable } from "@angular/core";


import { Team } from "../models/team";
import { TEAM_LIST } from '../assets/team-list';

@Injectable()
export class TeamService {
  /**
   * Liste des équipes
   */
  teamList: Team[];

  constructor() {  }

  refreshTeamList() : void {
    this.teamList = TEAM_LIST;
  }

}
