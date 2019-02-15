import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../shared/user-model';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {
  private user: UserModel;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.user = this._userService.getCurrentUser();
  }

}
