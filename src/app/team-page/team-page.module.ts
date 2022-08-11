import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModulesPro, IconsModule } from 'ng-uikit-pro-standard';
import { TeamPageRoutingModule } from './team-page-routing.module';
import { TeamPageComponent } from './team-page.component';


@NgModule({
  declarations: [
    TeamPageComponent
  ],
  imports: [
    CommonModule,
    TeamPageRoutingModule,
    IconsModule,
    MDBBootstrapModulesPro.forRoot()
  ]
})
export class TeamPageModule { }
