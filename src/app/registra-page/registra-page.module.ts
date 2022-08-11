import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistraPageRoutingModule } from './registra-page-routing.module';
import { RegistraPageComponent } from './registra-page.component';


@NgModule({
  declarations: [
    RegistraPageComponent
  ],
  imports: [
    CommonModule,
    RegistraPageRoutingModule
  ]
})
export class RegistraPageModule { }
