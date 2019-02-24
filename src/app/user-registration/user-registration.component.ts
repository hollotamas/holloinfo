import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { AlertService } from '../shared/alert.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  model: any = {};
  loading = false;
  createUser: any = {};
  constructor( private _router: Router,
               private _userService: UserService,
               private _alertService: AlertService) { }

  ngOnInit() {
    console.log('ngOnInit ',this.model);
  }

  updateUser(param) {
      return  {
              id: param.id,
              name: param.name,
              email: param.email,
              iskola: param.iskola,
              helyseg: param.helyseg,
              password: param.password,
              jogosultsag: 1
        }
  }

  regisztracio() {
    //this._userService.regisztracio();
    this.loading = true;
    console.log('Model: ',this.model);
    this.createUser = this.updateUser(this.model);
    this._userService.create(this.createUser)
        .subscribe(
            data => {
                // set success message and pass true paramater to persist the message after redirecting to the login page
                this._alertService.success('A regisztráció készen van!', true);
                this._router.navigate(['/user/login']);
                //console.log('success ',this.model);
            },
            error => {
                this._alertService.error('Adatok mentése sikertelen! '+error);
                this.loading = false;
                //console.log('error ',this.model);
            });

    }
}
