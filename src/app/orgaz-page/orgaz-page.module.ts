import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgazPageRoutingModule } from './orgaz-page-routing.module';
import { OrgazPageComponent } from './orgaz-page.component';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { ToastModule} from 'primeng/toast';
import { PanelModule} from 'primeng/panel';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    OrgazPageComponent
  ],
  imports: [
    CommonModule,
    OrgazPageRoutingModule,  
    ToastModule,
    PanelModule,
    OrganizationChartModule
  ],
  providers: [
    MessageService
]
})
export class OrgazPageModule { }
