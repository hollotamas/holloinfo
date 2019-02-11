import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TartalomComponent } from './tartalom/tartalom.component';
import { ErettsegiComponent } from './erettsegi/erettsegi.component';
import { ErettsegiTipusListComponent } from './erettsegi/erettsegi-tipus-list/erettsegi-tipus-list.component';
import { ErettsegiPostComponent } from './erettsegi/erettsegi-post/erettsegi-post.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { ErettsegiDetailComponent } from './erettsegi/erettsegi-detail/erettsegi-detail.component';
import { ErettsegiTanacsokComponent } from './erettsegi/erettsegi-tanacsok/erettsegi-tanacsok.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserProfilComponent } from './user/user-profil/user-profil.component';
import { UserProfilEditComponent } from './user/user-profil-edit/user-profil-edit.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';


const routes: Routes = [
  {path: 'tartalom', component: TartalomComponent},
  {path: 'erettsegi', component: ErettsegiComponent,
   children: [
     {path: '', component: ErettsegiTipusListComponent},
     {path: 'tanacsok', component: ErettsegiTanacsokComponent},
     {path: 'new', component: ErettsegiDetailComponent},
     {path: ':postID/post', component: ErettsegiPostComponent},
     {path: ':postID/edit', component: ErettsegiDetailComponent}
   ]},
  {path: 'user',
   children: [
     {path: '', component: UserProfilComponent},
     {path: 'login', component: UserLoginComponent},
     {path: 'edit', component: UserProfilEditComponent}
   ]},
  {path: 'registration', component: UserRegistrationComponent},
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
    ErettsegiTipusListComponent,
    ErettsegiPostComponent,
    ErettsegiDetailComponent,
    ErettsegiTanacsokComponent,
    UserLoginComponent,
    UserProfilComponent,
    UserProfilEditComponent,
    UserRegistrationComponent,
    AboutComponent
  ];
}
