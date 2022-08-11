import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgChartModule } from '@mondal/org-chart';
import { OfficerPageRoutingModule } from './officer-page-routing.module';
import { OfficerPageComponent } from './officer-page.component';
//import { BrowserModule } from '@angular/platform-browser';
import { NgxOrgChartModule } from 'ngx-org-chart';
@NgModule({
  declarations: [
    OfficerPageComponent
  ],
  imports: [
    CommonModule,
    OfficerPageRoutingModule,
    OrgChartModule,
    NgxOrgChartModule

  ]
})
export class OfficerPageModule { }
