import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap/alert';

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

@NgModule({
  declarations: [
    AppComponent,
    FejlecComponent,
    MenuComponent,
    ...AppRoutingModule.routTableComponent,
    ErettsegiTipusComponent,
    ErettsegiTipusListCardComponent,
    PageNotFoundComponent,
    ErettsegiTipusCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [ErettsegiService,
              ErettsegiTipusService,
              ErettsegiSzoftverService,
              ErettsegiSzintService,
              UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
