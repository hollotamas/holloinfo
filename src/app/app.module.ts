import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FejlecComponent } from './core/fejlec/fejlec.component';
import { MenuComponent } from './core/menu/menu.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { ErettsegiService } from './shared/erettsegi.service';
import { ErettsegiTipusComponent } from './erettsegi/erettsegi-tipus/erettsegi-tipus.component';
import { ErettsegiTipusListCardComponent } from './erettsegi/erettsegi-tipus-list-card/erettsegi-tipus-list-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FejlecComponent,
    MenuComponent,
    ...AppRoutingModule.routTableComponent,
    ErettsegiTipusComponent,
    ErettsegiTipusListCardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [ErettsegiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
