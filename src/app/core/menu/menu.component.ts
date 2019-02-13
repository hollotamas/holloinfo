import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public isCollapsed = true;
  constructor(public _userService: UserService) { }

  ngOnInit() {
  }

  logout() {
    this._userService.logout();
  }
}
