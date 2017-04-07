import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class ApiObservableService {

  constructor(private http: Http) { }

  getPlayers(){
    const url = 'http://localhost:3000/players';
    return this.http.get(url).map((response: Response) => response.json());
  }

}
