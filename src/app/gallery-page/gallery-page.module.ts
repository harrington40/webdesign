import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModulesPro, IconsModule } from 'ng-uikit-pro-standard';
import { GalleryPageRoutingModule } from './gallery-page-routing.module';
import { GalleryPageComponent } from './gallery-page.component';


@NgModule({
  declarations: [
    GalleryPageComponent
  ],
  imports: [
    CommonModule,
    GalleryPageRoutingModule,
    IconsModule,
    MDBBootstrapModulesPro.forRoot(),
  ]
})
export class GalleryPageModule { }
