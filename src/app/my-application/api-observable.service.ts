import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import { Headers, RequestOptions } from '@angular/http';
import {Team} from './classes/team';
import {observableToBeFn} from 'rxjs/testing/TestScheduler';
import {TournamentPhase} from './classes/tournament_phase';

//para enviar parametros en la url
import { URLSearchParams } from '@angular/http';


@Injectable()
export class ApiObservableService {

  constructor(private http: Http) { }


  private extractData(res: Response) {
    let body = res.json();
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

  getPlayers() {
    const url = 'http://localhost:3000/players';
    return this.http.get(url).map((response: Response) => response.json());
  }

  createTournament(name: string, begin_date: Date,
	end_date:Date,
	gender:string,
	discipline:string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    const url = 'http://localhost:3000/tournaments';
	    let id = 12334;

    return this.http.post(url, { name, gender, discipline, begin_date, end_date}, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }


  createTeam(team: Team): Observable<Team> {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

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
    const temporal_URL = 'localhost:3000/teams';
    return this.http.get(temporal_URL).map((response: Response) => response.json() as Team[]);
  }


  createTournamentPhase(phase: TournamentPhase): Observable<TournamentPhase> {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    const url = 'https://torneos-api-arka160.c9users.io/tournament_phases';

    console.log(JSON.stringify(phase));
    return this.http.post(url, JSON.stringify( phase ) , options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getTournaments() {
    const url = 'http://localhost:3000/tournaments';
    return this.http.get(url).map((response: Response) => response.json());
  }

  //servicio
  getTeamsByTournamentId(id: string){

    let params = new URLSearchParams();
    params.set('id', id );

    const url = 'http://localhost:3000/teams_by_tournament';
    return this.http.get(url, { search: params }).map((response: Response) => response.json());
  }

}
