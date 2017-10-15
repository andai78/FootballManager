import { Component, OnInit } from '@angular/core';

import { League } from './../../classes/League';

import { LeagueService } from './../services/league.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {

  leagues:League[];

  constructor(private leageServ:LeagueService) { }

  ngOnInit() {
    this.leagues = this.leageServ.getLeagues();
  }

}
