import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Response } from '@angular/http';

@Injectable()
export class TournamentService {

  private _currentTournament: any;

  constructor( private http: Http ) {
    console.log('initttttttttt');
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
}
