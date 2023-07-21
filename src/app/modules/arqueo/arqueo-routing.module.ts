import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioRegistrarComponent } from './pages/formulario-registrar/formulario-registrar.component';

const routes: Routes = [
  {path:'registrar',component:FormularioRegistrarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArqueoRoutingModule { }
