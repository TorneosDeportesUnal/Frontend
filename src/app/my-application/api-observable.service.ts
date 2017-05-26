import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import { Headers, RequestOptions } from '@angular/http';
import {Team} from './classes/team';
import {observableToBeFn} from 'rxjs/testing/TestScheduler';
import {TournamentPhase} from './classes/tournament_phase';

// para enviar parametros en la url
import { URLSearchParams } from '@angular/http';
import {Match} from './classes/match';
import {HttpService} from './services/http.service';


@Injectable()
export class ApiObservableService {

  constructor(private http: HttpService) { }


  private extractData(res: Response) {
    const body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }



  createTournament(name: string, begin_date: Date,
	end_date: Date,
	gender: string,
	discipline: string): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    const url = 'http://localhost:3000/tournaments';

    return this.http.post(url, { name, gender, discipline, begin_date, end_date}, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }


  createTeam(team: Team): Observable<Team> {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    const url = 'http://localhost:3000/teams';

    console.log(team, 'Team');

    console.log(JSON.stringify(team));
    return this.http.post(url, team, options)
      .map(this.extractData)
      .catch(this.handleError);

  }

  // getTeams(): Observable<Team> {
  //
  //   const temporal_URL = 'localhost:3000/teams';
  //
  //   return this.http.get(temporal_URL)
  //     .map(this.extractData)
  //     .catch(this.handleError);
  // }

  getTeams() {
    const temporal_URL = 'http://localhost:3000/teams';
    return this.http.get(temporal_URL).map((response: Response) => response.json() as Team[]);
  }


  createTournamentPhase(phase: TournamentPhase) {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    const url = 'http://localhost:3000/tournament_phases';

    const wraper = {
      tournament_phase : phase
    };

    console.log(JSON.stringify(wraper));
    return this.http.post(url, JSON.stringify( wraper ) , options)
      .map((response: Response) => response.json());
  }

  getTournaments() {
    const url = 'http://localhost:3000/tournaments';
    return this.http.get(url).map((response: Response) => response.json());
  }

  getPlayers() {
    const url = 'http://localhost:3000/players';
    return this.http.get(url).map((response: Response) => response.json());
  }
  // servicio
  getTeamsByTournamentId(id: string) {

    const params = new URLSearchParams();
    params.set('id', id );

    const url = 'http://localhost:3000/teams_by_tournament';
    return this.http.get(url, { search: params }).map((response: Response) => response.json());
  }

  getMatchesByGroupId(id: string) {
    const params = new URLSearchParams();
    params.set('id', id );

    const url = 'http://localhost:3000/matches_by_group';
    return this.http.get(url, { search: params }).map((response: Response) => response.json() );
  }

  getGroupsByTournamentId(id: string) {
    const params = new URLSearchParams();
    params.set('id', id );

    const url = 'http://localhost:3000/groups_by_tournament';
    return this.http.get(url, { search: params }).map((response: Response) => response.json() );
  }

  getTeamsByGroupId(id: string) {
    const params = new URLSearchParams();
    params.set('id', id );

    const url = 'http://localhost:3000/groups_by_tournament';
    return this.http.get(url, { search: params }).map((response: Response) => response.json() );
  }

  getCreateMatches(id_phase: string) {
    const params = new URLSearchParams();
    params.set('id', id_phase );

    const url = 'http://localhost:3000/create_matches';
    return this.http.get(url, { search: params }).map((response: Response) => response.json() );
  }
  getTeamMatch(teamId: string, matchId: string ) {
    let params = new URLSearchParams();
    params.set('teamId', teamId );
    params.set('matchId', matchId );

    const url = 'https://torneos-api-arka160.c9users.io/team_match_search';
    return this.http.get(url, { search: params }).map((response: Response) => response.json() );
  }

  getTeamGroup(teamId: string, groupId: string) {
    let params = new URLSearchParams();
    params.set('teamId', teamId );
    params.set('groupId', groupId );

    const url = 'https://torneos-api-arka160.c9users.io/team_group_search';
    return this.http.get(url, { search: params }).map((response: Response) => response.json() );
  }
}
