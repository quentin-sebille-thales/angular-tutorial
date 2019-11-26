import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TeamModule } from '../team/team.module';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, TeamModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
