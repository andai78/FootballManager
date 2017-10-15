import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LeagueService {

  constructor(private http:Http) { }

  getLeagues(){
      return this.http.get('mocks/leagues.json');
  }
}
