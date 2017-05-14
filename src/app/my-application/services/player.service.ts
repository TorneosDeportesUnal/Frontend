import { Injectable } from '@angular/core';
import {Player} from '../classes/player';
import {Observable} from 'rxjs/Observable';
import {Headers, Http, RequestOptions, Response} from '@angular/http';

@Injectable()
export class PlayerService {

  constructor(private http: Http) { }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || { };
  }

  createPlayer(player: Player): Observable<Player> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    const url = 'http://localhost:3000/players';

    console.log(player, 'Team');
    console.log(JSON.stringify(player));
    return this.http.post(url, player, options)
      .map(this.extractData);
  }
}
