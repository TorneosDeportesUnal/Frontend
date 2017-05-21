import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Player} from "../classes/player";

@Injectable()
export class TeamService {

  constructor( private http: Http) { }


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

  getPlayersByTeamId(id: string){

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

  deleteTeam(id_team: number): Observable<Player> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({headers: headers});

    const url = 'http://localhost:3000/teams/' + id_team;

    return this.http.delete(url)
      .catch(this.handleError);
  }

}
