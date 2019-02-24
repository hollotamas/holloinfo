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
  private _updateUser: any = {};

  constructor( private _route: ActivatedRoute,
               private _router: Router,
               private _userService: UserService,
               private _authenticationService: AuthenticationService,
               private _alertService: AlertService,
               private _location: Location ) {
    this._currentUser = this._authenticationService.currentUser;
    console.log('Constructor: ',this._currentUser);

  }

  ngOnInit() {
  }

  updateUser(param) {
      return  {
              id: param.id,
              name: param.name,
              email: param.email,
              iskola: param.iskola,
              helyseg: param.helyseg,
              jogosultsag: 1,
              token: param.token,
              password: ''
        }
  }

  update() {
    this.loading = true;
    //this._currentUser = this.updateUser();

    this._updateUser = this.updateUser(this._currentUser);
    console.log('update-profil: ',this._updateUser);
    this._userService.update(this._updateUser)
      .subscribe(
        data=>{
          this._alertService.success('Adatok módosítása megtörtént!',true)
          this._location.back();
        },
        error=>{
          this._alertService.error('Az adatok mentése sikertelen! ');
          this.loading = false;
        });
    this._location.back()
  }
}
