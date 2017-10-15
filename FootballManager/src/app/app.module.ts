import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LeagueComponent } from './league/league.component';

import { LeagueService } from './services/league.service';


const routes = [
  { path: "", component: AppComponent},
  { path: "choose", component: LeagueComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LeagueComponent
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
