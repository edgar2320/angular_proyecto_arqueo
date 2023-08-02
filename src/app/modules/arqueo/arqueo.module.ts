import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArqueoRoutingModule } from './arqueo-routing.module';
import { FormularioRegistrarComponent } from './pages/formulario-registrar/formulario-registrar.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormularioRegistrarComponent
  ],
  imports: [
    CommonModule,
    ArqueoRoutingModule,
    DashboardModule,
    ReactiveFormsModule
  ]
})
export class ArqueoModule { }
