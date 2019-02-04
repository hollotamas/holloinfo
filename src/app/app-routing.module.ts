import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TartalomComponent } from './tartalom/tartalom.component';
import { ErettsegiComponent } from './tartalom/erettsegi/erettsegi.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { ErettsegiTipusComponent } from './tartalom/erettsegi-tipus/erettsegi-tipus.component';
import { ErettsegiTipusListComponent } from './tartalom/erettsegi-tipus-list/erettsegi-tipus-list.component';
import { ErettsegiPostComponent } from './tartalom/erettsegi-post/erettsegi-post.component';

const routes: Routes = [
  {path: 'tartalom', component: TartalomComponent},
  {path: 'erettsegi',
   component: ErettsegiComponent,
   children: [
     {path: 'erettsegi/:tipus', component: 'ErettsegiTipusComponent'},
     {path: 'erettsegi/:tipus/list', component: 'ErettsegiTipusListComponent'},
     {path: 'erettsegi/:tipus/:post', component: 'ErettsegiPostComponent'}
   ]},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: '/tartalom', pathMatch: 'full' },
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
    AboutComponent,
    ErettsegiTipusComponent,
    ErettsegiTipusListComponent,
    ErettsegiPostComponent,
    PageNotFoundComponent
  ];
}
