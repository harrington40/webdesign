import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YearbookPageComponent } from './yearbook-page.component';

const routes: Routes = [{ path: '', component: YearbookPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YearbookPageRoutingModule { }
