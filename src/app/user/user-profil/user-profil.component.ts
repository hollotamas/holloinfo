import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../shared/user-model';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {
  currentUser: UserModel;
  users: UserModel[] = [];

  constructor(private _userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllUsers();
  }
  deleteUser(id: number) {
      this._userService.delete(id).subscribe(() => { this.loadAllUsers() });
  }

  private loadAllUsers() {
      //this.userService.getAll().subscribe(users => { this.users = users; });
      this._userService.getAll().subscribe(users => { this.users = users; });
  }
}
