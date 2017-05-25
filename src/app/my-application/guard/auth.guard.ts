import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate, Router,
  RouterStateSnapshot
} from '@angular/router';
import { CookieService } from 'ng2-cookies';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    protected router: Router,
    private _cookie: CookieService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this._cookie.get('access-token') === '') {
      this.router.navigate(['/players/login']);
    }
    return this._cookie.get('access-token') !== '';
  }
}
