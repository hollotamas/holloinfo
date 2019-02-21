import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../shared/alert.service';
import { AuthenticationService } from '../../shared/authentication.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor( private route: ActivatedRoute,
               private router: Router,
               private authenticationService: AuthenticationService,
               private alertService: AlertService ) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
      this.loading = true;
      console.log('login()');
      this.authenticationService.login(this.model.email, this.model.password)
          .subscribe(
              data => {
                  //this.router.navigate([this.returnUrl]);
                  this.router.navigate([this.returnUrl]);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }
}
