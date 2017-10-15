import { League } from './../../classes/League';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { LEAGUES } from './../mock-league';

import 'rxjs/add/operator/map';

@Injectable()
export class LeagueService {

  constructor(private http:Http) { }

  getLeagues(): League[]{
      console.log(LEAGUES);
      return LEAGUES;
  }
}
