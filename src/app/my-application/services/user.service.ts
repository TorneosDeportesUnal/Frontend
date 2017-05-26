import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { CookieService } from 'ng2-cookies';

@Injectable()
export class UserService {

  public error: string = '';

  constructor(
    private _cookie: CookieService,
    private _http: Http
  ) {

  }

  public logIn(email, password) {

    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    const url = 'https://torneos-api-arka160.c9users.io/auth/sign_in';

    return this._http.post(url, {email: email, password: password}, options);
  }

  public logOut() {
    this._cookie.deleteAll();
  }

  public setCookies(data) {

    // const setCookieHeader = data.get('access-token');

    this._cookie.set('Content-Type', data.get('Content-Type'));
    this._cookie.set('access-token', data.get('access-token'));
    this._cookie.set('token-type', data.get('token-type'));
    this._cookie.set('expiry', data.get('expiry'));
    this._cookie.set('client', data.get('client'));
    this._cookie.set('uid', data.get('uid'));
  }
}
