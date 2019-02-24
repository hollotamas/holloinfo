import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { UserModel } from '../../shared/user-model';
import { UserService } from '../../shared/user.service';
import { AuthenticationService } from '../../shared/authentication.service';
import { AlertService } from '../../shared/alert.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-profil-edit',
  templateUrl: './user-profil-edit.component.html',
  styleUrls: ['./user-profil-edit.component.css']
})
export class UserProfilEditComponent implements OnInit {
  public _currentUser: UserModel;
  public loading = false;

  constructor( private _route: ActivatedRoute,
               private _router: Router,
               private _userService: UserService,
               private _authenticationService: AuthenticationService,
               private _alertService: AlertService,
               private _location: Location ) {
    this._currentUser = this._authenticationService.currentUser;
    console.log(this._currentUser);

  }

  ngOnInit() {
  }

  update() {
    this.loading = true;
    console.log('Edit:', this._currentUser);
    this._userService.update(this._currentUser)
      .subscribe(
        data=>{
          this._alertService.success('Adatok módosítása megtörtént!',true)
          this._location.back();
        },
        error=>{
          this._alertService.error('Az adatok mentése sikertelen! '+ JSON.parse(error));
          this.loading = false;
        });
    this._location.back()
  }
}
