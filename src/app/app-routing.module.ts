import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TartalomComponent } from './tartalom/tartalom.component';
import { ErettsegiComponent } from './tartalom/erettsegi/erettsegi.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'tartalom', component: TartalomComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static routTableComponent = [
    TartalomComponent,
    ErettsegiComponent,
    PageNotFoundComponent
  ];
}
