import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FejlecComponent } from './fejlec/fejlec.component';
import { MenuComponent } from './menu/menu.component';
import { TartalomComponent } from './tartalom/tartalom.component';

@NgModule({
  declarations: [
    AppComponent,
    FejlecComponent,
    MenuComponent,
    TartalomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
