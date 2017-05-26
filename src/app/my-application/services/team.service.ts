import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Player } from '../classes/player';
import { Team } from '../classes/team';
import { HttpService } from './http.service';

@Injectable()
export class TeamService {

  constructor( private http: HttpService) { }


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
  private extractData(res: Response) {
    const body = res.json();
    return body.data || { };
  }

  // ************ services ***************

  getPlayersByTeamId(id: string) {

    const params = new URLSearchParams();
    params.set('id', id );
    const url = 'http://localhost:3000/players_by_team';
    return this.http.get(url, { search: params }).map((response: Response) => response.json());
  }

  getTeamById(id: string) {

    const params = new URLSearchParams();
    params.set('id', id );

    const url = 'http://localhost:3000/teams_by_id';
    return this.http.get(url, { search: params }).map((response: Response) => response.json());
  }

  updateTeam(team: any): Observable<Team> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    console.log(team.id, 'team id');
    console.log(team, 'team');

    const url = 'http://localhost:3000/teams/' + team.id;

    return this.http.patch(url, team, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  deleteTeam(id_team: number): Observable<Player> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({headers: headers});

    const url = 'http://localhost:3000/teams/' + id_team;

    return this.http.delete(url)
      .catch(this.handleError);
  }

}
