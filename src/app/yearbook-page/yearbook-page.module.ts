import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YearbookPageRoutingModule } from './yearbook-page-routing.module';
import { YearbookPageComponent } from './yearbook-page.component';


@NgModule({
  declarations: [
    YearbookPageComponent
  ],
  imports: [
    CommonModule,
    YearbookPageRoutingModule
  ]
})
export class YearbookPageModule { }
