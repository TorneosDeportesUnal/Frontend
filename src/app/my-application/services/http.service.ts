import { Injectable } from '@angular/core';
import { Request, XHRBackend, RequestOptions, Response, Http, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { CookieService } from 'ng2-cookies';

@Injectable()
export class HttpService extends Http {

  constructor(backend: XHRBackend,
              private _cookie: CookieService,
              defaultOptions: RequestOptions, private router: Router) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    // do whatever
    if (typeof url === 'string') {
      if (!options) {
        options = { headers: new Headers() };
      }
      this.setHeaders(options);
    } else {
      this.setHeaders(url);
    }

    return super.request(url, options).catch(this.catchErrors());
  }

  private catchErrors() {
    return (res: Response) => {
      if (res.status === 401 || res.status === 403) {
        console.log('errors httpservice extends');
        // handle authorization errors
        // in this example I am navigating to logout route which brings the login screen
        // this.router.navigate(['logout']);
      }
      return Observable.throw(res);
    };
  }

  private setHeaders(objectToSetHeadersTo: Request | RequestOptionsArgs) {
    // add whatever header that you need to every request
    // in this example I add header token by using authService that I've created

    objectToSetHeadersTo.headers.append( 'Content-Type', this._cookie.get('Content-Type'));
    objectToSetHeadersTo.headers.append( 'access-token', this._cookie.get('access-token'));
    objectToSetHeadersTo.headers.append( 'token-type', this._cookie.get('token-type'));
    objectToSetHeadersTo.headers.append( 'expiry', this._cookie.get('expiry'));
    objectToSetHeadersTo.headers.append( 'client', this._cookie.get('client'));
    objectToSetHeadersTo.headers.append( 'uid', this._cookie.get('uid'));
  }
}
