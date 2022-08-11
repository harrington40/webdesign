import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YearPageComponent } from './year-page.component';

const routes: Routes = [{ path: '', component: YearPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YearPageRoutingModule { }
