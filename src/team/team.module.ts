import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AngularMaterialModule } from "../angular-material/angular-material.module";

import { TeamCardComponent } from "./components/team-card/team-card.component";
import { TeamPageComponent } from "./components/team-page/team-page.component";
import { TeamService } from './services/team.service';
import { TeamRumorsMessageComponent } from './components/team-rumors-message/team-rumors-message.component';

@NgModule({
  imports: [CommonModule, AngularMaterialModule],
  declarations: [TeamCardComponent, TeamPageComponent, TeamRumorsMessageComponent],
  exports: [TeamPageComponent],
  providers: [TeamService]
})
export class TeamModule {}
