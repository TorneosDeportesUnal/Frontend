import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Response } from '@angular/http';

@Injectable()
export class TeamService {

  constructor( private http: Http) { }

  getPlayersByTeamId(id: string){

    const params = new URLSearchParams();
    params.set('id', id );
    const url = 'http://localhost:3000/players_by_team';
    return this.http.get(url, { search: params }).map((response: Response) => response.json());
  }

}
