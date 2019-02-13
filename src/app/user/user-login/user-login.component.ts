import { Component, OnInit } from '@angular/core';
import { UserService} from '../../shared/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  public error: string;

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  login(email: string, password: string) {
    if (!this._userService.login(email, password)) {
      this.error = "Bejelentkezési hiba!!!";
    }
  }

  clearError(): void {
    delete(this.error);
  }
}
