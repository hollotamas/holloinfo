import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { UserModel } from '../../shared/user-model';
import { UserService } from '../../shared/user.service';
import { AuthenticationService } from '../../shared/authentication.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-profil-edit',
  templateUrl: './user-profil-edit.component.html',
  styleUrls: ['./user-profil-edit.component.css']
})
export class UserProfilEditComponent implements OnInit {
  public _currenUser: UserModel;

  constructor( private _route: ActivatedRoute,
               private _router: Router,
               private _userService: UserService,
               private _authenticationService: AuthenticationService,
               private _location: Location ) {
    this._currentUser = this._authenticationService.currentUser;
    console.log(this._currentUser);

  }

  ngOnInit() {
  }

  onSubmit(userForm) {
    this._location.back()
  }
}
