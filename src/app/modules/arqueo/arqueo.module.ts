import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArqueoRoutingModule } from './arqueo-routing.module';
import { FormularioRegistrarComponent } from './pages/formulario-registrar/formulario-registrar.component';


@NgModule({
  declarations: [
    FormularioRegistrarComponent
  ],
  imports: [
    CommonModule,
    ArqueoRoutingModule
  ]
})
export class ArqueoModule { }
