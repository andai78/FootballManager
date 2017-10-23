import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LeagueComponent } from './league/league.component';

import { LeagueService } from './services/league.service';
import { TeamComponent } from './team/team.component';


const routes = 
[
  { path: "", component: AppComponent},
  { path: "chooseLeague", component: LeagueComponent},
  { path: "showTeams", component: TeamComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LeagueComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LeagueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
