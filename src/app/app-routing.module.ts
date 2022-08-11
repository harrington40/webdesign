import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page/about-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { AppComponent } from './app.component';
//ng generate module about-page  --route about-page --module app.module
const routes: Routes = [

  { path: 'main-page', loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPageModule) },
  { path: 'payment-page', loadChildren: () => import('./payment-page/payment-page.module').then(m => m.PaymentPageModule) },
  { path: 'no-page-found', loadChildren: () => import('./no-page-found/no-page-found.module').then(m => m.NoPageFoundModule) },
  { path: 'about-page', loadChildren: () => import('./about-page/about-page.module').then(m => m.AboutPageModule) },
  { path: 'member-page', loadChildren: () => import('./member-page/member-page.module').then(m => m.MemberPageModule) },
  { path: 'profile-page', loadChildren: () => import('./profile-page/profile-page.module').then(m => m.ProfilePageModule) },
  { path: 'registra-page', loadChildren: () => import('./registra-page/registra-page.module').then(m => m.RegistraPageModule) },
  { path: 'account-page', loadChildren: () => import('./account-page/account-page.module').then(m => m.AccountPageModule) },

  { path: 'login-page', loadChildren: () => import('./login-page/login-page.module').then(m => m.LoginPageModule) },

  { path: 'gallery-page', loadChildren: () => import('./gallery-page/gallery-page.module').then(m => m.GalleryPageModule) },

  { path: 'yearbook-page', loadChildren: () => import('./year-page/year-page.module').then(m => m.YearPageModule) },

  { path: 'yearbook-page', loadChildren: () => import('./yearbook-page/yearbook-page.module').then(m => m.YearbookPageModule) },

  { path: 'team-page', loadChildren: () => import('./team-page/team-page.module').then(m => m.TeamPageModule) },

  { path: 'orgaz-page', loadChildren: () => import('./orgaz-page/orgaz-page.module').then(m => m.OrgazPageModule) },

  { path: 'officer-page', loadChildren: () => import('./officer-page/officer-page.module').then(m => m.OfficerPageModule) }
];

@NgModule({ 
  declarations: [],
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
