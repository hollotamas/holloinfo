import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { UserModel } from './user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public isLoggedIn = false;
  public currentUser: UserModel;

  constructor( private http: HttpClient ) {
    if (localStorage.getItem('currentUser')) {
            // logged in so return true
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.isLoggedIn = true;
    }
  }

  login(email: string, password: string) {
    //console.log('login ',email);
    return this.http.post<any>('/api/authenticate', { email: email, password: password })
        .map(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) { //
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.isLoggedIn = true;
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
            }
            return user;
        });
  }

  logout() {
        // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.isLoggedIn = false;
  }
}
