import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Response } from '@angular/http';

@Injectable()
export class TournamentService {

  constructor( private http: Http) { }

  getTournaments() {
    const url = 'http://localhost:3000/tournaments';
    return this.http.get(url)
      .map(response => response.json());
  }

  getTournamentById(id: string){

    const params = new URLSearchParams();
    params.set('id', id );

    const url = 'http://localhost:3000/tournaments_by_id';
    return this.http.get(url, { search: params }).map((response: Response) => response.json());
  }
}
