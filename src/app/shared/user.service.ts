import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from './user-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) {

  }
  getAll() {
      return this.http.get<User[]>('/api/users');
  }

  getById(id: number) {
      return this.http.get('/api/users/' + id);
  }

  create(user: User) {
      return this.http.post('/api/users', user);
  }

  update(user: User) {
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
        cim: '1000 Kerekerdő, Fa sor 3.',
        jogosultsag: 0
      },
      {
        id: 2,
        name: 'Ló Szerafin',
        email: 'szerafin@example.com',
        cim: '1000 Kerekerdő, Fa sor 3.',
        jogosultsag: 1
      },
      {
        id: 3,
        name: 'Aromo',
        email: 'aromo@example.com',
        cim: '1000 Kerekerdő, Fa sor 3.',
        jogosultsag: 1
      },
    ];
  }
}
