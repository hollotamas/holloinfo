import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FejlecComponent } from './core/fejlec/fejlec.component';
import { MenuComponent } from './core/menu/menu.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    FejlecComponent,
    MenuComponent,
    ...AppRoutingModule.routTableComponent,
   PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
