import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'ngx-easy-table';
import { MemberPageRoutingModule } from './member-page-routing.module';
import { MemberPageComponent } from './member-page.component';


@NgModule({
  declarations: [
    MemberPageComponent
  ],
  imports: [
    CommonModule,
    MemberPageRoutingModule,
    TableModule
  ]
})
export class MemberPageModule { }
