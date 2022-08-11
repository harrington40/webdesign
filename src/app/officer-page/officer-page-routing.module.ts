import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfficerPageComponent } from './officer-page.component';

const routes: Routes = [{ path: '', component: OfficerPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficerPageRoutingModule { }
