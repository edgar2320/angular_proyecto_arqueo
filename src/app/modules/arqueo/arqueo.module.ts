import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArqueoRoutingModule } from './arqueo-routing.module';
import { FormularioRegistrarComponent } from './pages/formulario-registrar/formulario-registrar.component';
import { DashboardModule } from '../dashboard/dashboard.module';


@NgModule({
  declarations: [
    FormularioRegistrarComponent
  ],
  imports: [
    CommonModule,
    ArqueoRoutingModule,
    DashboardModule
  ]
})
export class ArqueoModule { }
