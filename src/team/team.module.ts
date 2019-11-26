import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TeamCardComponent } from "./components/team-card/team-card.component";
import { TeamPageComponent } from "./components/team-page/team-page.component";

@NgModule({
  imports: [CommonModule],
  declarations: [TeamCardComponent, TeamPageComponent],
  exports: [TeamPageComponent]
})
export class TeamModule {}
