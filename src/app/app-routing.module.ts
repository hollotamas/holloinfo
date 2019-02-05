import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TartalomComponent } from './tartalom/tartalom.component';
import { ErettsegiComponent } from './erettsegi/erettsegi.component';
import { ErettsegiTipusComponent } from './erettsegi-tipus/erettsegi-tipus.component';
import { ErettsegiTipusListComponent } from './erettsegi-tipus-list/erettsegi-tipus-list.component';
import { ErettsegiPostComponent } from './erettsegi-post/erettsegi-post.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'tartalom', component: TartalomComponent},
  {path: 'erettsegi', component: ErettsegiComponent,
   children: [
     {path: 'tipus', component: ErettsegiTipusComponent},
     {path: ':tipusID/list', component: ErettsegiTipusListComponent},
     {path: ':tipusID/:postID/post', component: ErettsegiPostComponent}
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
    ErettsegiTipusComponent,
    ErettsegiTipusListComponent,
    ErettsegiPostComponent,
    AboutComponent,
    PageNotFoundComponent
  ];
}
