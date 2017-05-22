import { Injectable } from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Headers, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Player} from '../classes/player';
import {Tournament} from "../classes/tournament";

@Injectable()
export class TournamentService {

  private _currentTournament: any;

  constructor( private http: Http ) {
    console.log('initttttttttt');
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

  private extractData(res: Response) {
    const body = res.json();
    return body.data || { };
  }

  get currentTournament() {
    return this._currentTournament;
  }

  setCurrentTournament(tournament) {
    this._currentTournament = tournament;
  }

  getTournaments() {
    const url = 'http://localhost:3000/tournaments';
    return this.http.get(url)
      .map(response => response.json());
  }

  getTournamentById(id: string) {

    const params = new URLSearchParams();
    params.set('id', id );

    const url = 'http://localhost:3000/tournaments_by_id';
    return this.http.get(url, { search: params }).map((response: Response) => response.json());
  }

  updateTournament(tournament: any): Observable<Tournament> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    console.log(tournament.id_tournament, 'tournmanet id 2');
    console.log(tournament, 'tournmanet');

    const url = 'http://localhost:3000/tournaments/' + tournament.id;

    return this.http.patch(url, tournament, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  deleteTournament(id_tournament: number): Observable<Tournament> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    const url = 'http://localhost:3000/tournaments/' + id_tournament;

    return this.http.delete(url)
      .catch(this.handleError);
  }
}
