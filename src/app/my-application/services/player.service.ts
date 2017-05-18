import { Injectable } from '@angular/core';
import {Player} from '../classes/player';
import {Observable} from 'rxjs/Observable';
import {Headers, Http, RequestOptions, Response} from '@angular/http';

@Injectable()
export class PlayerService {

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
  constructor(private http: Http) { }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || { };
  }

  createPlayer(player: Player): Observable<Player> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    const url = 'http://localhost:3000/players';

    console.log(player, 'Player');
    console.log(JSON.stringify(player));
    return this.http.post(url, {player: player}, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  updatePlayer(player: Player): Observable<Player> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    const url = 'http://localhost:3000/players/' + player.id_player;

    return this.http.put(url, player, options)
      .map(this.extractData)
      .catch(this.handleError);
  }
}
