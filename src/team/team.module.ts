import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AngularMaterialModule } from "../angular-material/angular-material.module";

import { TeamCardComponent } from "./components/team-card/team-card.component";
import { TeamPageComponent } from "./components/team-page/team-page.component";
import { TeamService } from './services/team.service';

@NgModule({
  imports: [CommonModule, AngularMaterialModule],
  declarations: [TeamCardComponent, TeamPageComponent],
  exports: [TeamPageComponent],
  providers: [TeamService]
})
export class TeamModule {}
