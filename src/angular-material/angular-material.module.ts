import { NgModule } from "@angular/core";
import { MatCardModule, MatButtonModule } from "@angular/material";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  exports: [MatCardModule, MatButtonModule, MatIconModule]
})
export class AngularMaterialModule {}
