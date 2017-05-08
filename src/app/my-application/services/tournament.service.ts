import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TournamentService {

  constructor( private http: Http) { }

  getTournaments() {
    const url = 'http://localhost:3000/tournaments';
    return this.http.get(url)
      .map(response => response.json());
  }

}
