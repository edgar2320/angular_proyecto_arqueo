import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformesRoutingModule } from './informes-routing.module';
import { InformesComponent } from './pages/informes/informes.component';


@NgModule({
  declarations: [
    InformesComponent
  ],
  imports: [
    CommonModule,
    InformesRoutingModule
  ]
})
export class InformesModule { }
