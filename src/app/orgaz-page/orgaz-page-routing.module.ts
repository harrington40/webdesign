import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrgazPageComponent } from './orgaz-page.component';
import {OrganizationChartModule} from 'primeng/organizationchart';

const routes: Routes = [{ path: '', component: OrgazPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrgazPageRoutingModule { }
