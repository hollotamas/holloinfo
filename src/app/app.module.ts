import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './shared/jwt.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FejlecComponent } from './core/fejlec/fejlec.component';
import { MenuComponent } from './core/menu/menu.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { ErettsegiService } from './shared/erettsegi/erettsegi.service';
import { ErettsegiTipusService } from './shared/erettsegi/erettsegi-tipus.service';
import { ErettsegiSzoftverService } from './shared/erettsegi/erettsegi-szoftver.service';
import { ErettsegiSzintService } from './shared/erettsegi/erettsegi-szint.service';
import { UserService } from './shared/user.service';
import { ErettsegiTipusComponent } from './erettsegi/erettsegi-tipus/erettsegi-tipus.component';
import { ErettsegiTipusListCardComponent } from './erettsegi/erettsegi-tipus-list-card/erettsegi-tipus-list-card.component';
import { ErettsegiTipusCardComponent } from './erettsegi/erettsegi-tipus-card/erettsegi-tipus-card.component';
import { LoggedInGuard } from './shared/logged-in.guard';
import { AlertComponent } from './core/alert/alert.component';
import { AlertService } from './shared/alert.service';
import { AuthenticationService } from './shared/authentication.service';
import { fakeBackendProvider } from './shared/fake-backend';

@NgModule({
  declarations: [
    AppComponent,
    FejlecComponent,
    MenuComponent,
    AlertComponent,
    ...AppRoutingModule.routTableComponent,
    ErettsegiTipusComponent,
    ErettsegiTipusListCardComponent,
    PageNotFoundComponent,
    ErettsegiTipusCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [ErettsegiService,
              ErettsegiTipusService,
              ErettsegiSzoftverService,
              ErettsegiSzintService,
              UserService,
              {
                provide: HTTP_INTERCEPTORS,
                useClass: JwtInterceptor,
                multi: true
              },

              AlertService,
              AuthenticationService,
              LoggedInGuard,
              fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
