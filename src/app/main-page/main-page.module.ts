import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModulesPro, IconsModule,
  NavbarModule } from 'ng-uikit-pro-standard';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    IconsModule,
    NavbarModule,
    MDBBootstrapModulesPro.forRoot(),
    MainPageRoutingModule
  ]
})
export class MainPageModule { }
