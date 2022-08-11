import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistraPageComponent } from './registra-page.component';

const routes: Routes = [{ path: '', component: RegistraPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistraPageRoutingModule { }
