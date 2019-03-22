import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public isCollapsed = true;

  constructor(private _authenticationService: AuthenticationService) {
  }


  ngOnInit() {

  }

  logout() {
     this._authenticationService.logout();
  }
}
