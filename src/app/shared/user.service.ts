import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from './user-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor( private http: HttpClient ) {
  }

  getAll() {
      return this.http.get<UserModel[]>('/api/users');
  }

  getById(id: number) {
      return this.http.get('/api/users/' + id);
  }

  create(user: UserModel) {
      //console.log('Create: ', user);
      return this.http.post('/api/users', user);
  }

  update(user: UserModel) {
      console.log('update-service:', user);
      return this.http.put('/api/users/' + user.id, user);
  }

  delete(id: number) {
      return this.http.delete('/api/users/' + id);
  }



  private getMockUser() {
    return [
      {
        id: 1,
        name: 'Vacskamati',
        email: 'vacskamati@example.com',
        password: 'Angular',
        iskola: 'Kerek Gimi',
        helyseg: 'Kerekerdő',
        jogosultsag: 0
      },
      {
        id: 2,
        name: 'Ló Szerafin',
        email: 'szerafin@example.com',
        password: 'Angular',
        iskola: 'Kerek Gimi',
        helyseg: 'Kerekerdő',
        jogosultsag: 1
      },
      {
        id: 3,
        name: 'Aromo',
        email: 'aromo@example.com',
        iskola: 'Kerek Gimi',
        helyseg: 'Kerekerdő',
        jogosultsag: 1
      },
    ];
  }
}
