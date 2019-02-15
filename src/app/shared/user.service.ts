import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from './user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public isLoggedIn = false;
  private _user: UserModel;
  private _allUser: UserModel[];

  constructor(private _router: Router) {
    this._allUser = [
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

  login(email: string, password: string): boolean {
    if (email === "Angular" && password === "Angular") {
      this._user = new UserModel(UserModel.peldaUser);
      this.isLoggedIn = true;
      this._router.navigate(['/user']);
      return true;
    } else {
      return false;
    }
  }

  logout():void {
    delete(this._user);
    this.isLoggedIn = false;
    this._router.navigate(['/tartalom'])
  }

  regisztracio(param?: UserModel): boolean {
    if (param) {
      this._user = new UserModel(param);
    } else {
      this._user = new UserModel(UserModel.peldaUser);
    }
    this.isLoggedIn = true;
    this._router.navigate(['/user']);
    return true;
  }

  getUserById(id: number) {
    const user = this._allUser.filter(x => x.id == id);
    return user.length > 0 ? user[0] : new UserModel(UserModel.emptyUser);
  }

  getCurrentUser() {
    return this._user;
  }
}
