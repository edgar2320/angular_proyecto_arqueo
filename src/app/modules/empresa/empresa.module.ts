import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { FormularioRegistrarComponent } from './pages/formulario-registrar/formulario-registrar.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmpresaService } from './services/empresa.service';


@NgModule({
  declarations: [
    FormularioRegistrarComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    DashboardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    EmpresaService
  ]
})
export class EmpresaModule { }
