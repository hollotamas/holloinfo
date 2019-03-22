import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  constructor( private _router: Router ) {

  }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (localStorage.getItem('currentUser')) {
          // logged in so return true
          return true;
      }
      this._router.navigate(['/user/login'], { queryParams: { returnUrl: state.url }});
      return false;

  }
}
