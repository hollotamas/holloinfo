import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../shared/user-model';
import { AuthenticationService } from '../../shared/authentication.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {
  currentUser: UserModel;

  constructor(private _authenticationService: AuthenticationService ) {
    this.currentUser =  this._authenticationService.currentUser; //JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }
}
