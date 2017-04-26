import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import { Headers, RequestOptions } from '@angular/http';


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

  getPlayers(){
    const url = 'http://localhost:3000/players';
    return this.http.get(url).map((response: Response) => response.json());
  }

  createTournament(name: string, begin_date:Date,
	end_date:Date,
	gender:string,
	discipline:string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    const url = 'http://localhost:3000/tournaments';
	    let id = 12334;

    return this.http.post(url, { gender, discipline, begin_date, end_date}, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }




}
