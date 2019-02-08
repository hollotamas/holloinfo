import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TartalomComponent } from './tartalom/tartalom.component';
import { ErettsegiComponent } from './erettsegi/erettsegi.component';
import { ErettsegiTipusComponent } from './erettsegi/erettsegi-tipus/erettsegi-tipus.component';
import { ErettsegiTipusListComponent } from './erettsegi/erettsegi-tipus-list/erettsegi-tipus-list.component';
import { ErettsegiPostComponent } from './erettsegi/erettsegi-post/erettsegi-post.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { ErettsegiDetailComponent } from './erettsegi/erettsegi-detail/erettsegi-detail.component';


const routes: Routes = [
  {path: 'tartalom', component: TartalomComponent},
  {path: 'erettsegi', component: ErettsegiComponent,
   children: [
     {path: 'tipus', component: ErettsegiTipusComponent},
     {path: ':tipusID/list', component: ErettsegiTipusListComponent},
     {path: ':tipusID/:postID/post', component: ErettsegiPostComponent},
     {path: 'new', component: ErettsegiDetailComponent},
     {path: ':tipusID/:postID/edit', component: ErettsegiDetailComponent}
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
    ErettsegiDetailComponent,
    AboutComponent
  ];
}
