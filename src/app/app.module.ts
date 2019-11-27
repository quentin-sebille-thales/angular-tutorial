import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "../app-routing/app-routing.module";
import { TeamModule } from "../team/team.module";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TeamModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
