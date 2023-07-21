import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { PagerrorComponent } from './modules/dashboard/pagerror/pagerror.component';

const routes: Routes = [
  {path:``,component:SkeletonComponent,
  children:[
    {path:'',loadChildren:()=>import('../app/modules/dashboard/dashboard.module').
    then(m => m.DashboardModule)},
    {path:'empresa', loadChildren:()=>import('../app/modules/empresa/empresa.module').
    then(m => m.EmpresaModule)},
    {path:'arqueo', loadChildren:()=>import('../app/modules/arqueo/arqueo.module').
    then(m => m.ArqueoModule)},
    {path:'informe', loadChildren:()=>import('../app/modules/informes/informes.module').
    then(m => m.InformesModule)},
    ]
  },
  {path:'**',component:PagerrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
