import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BarraDashboardComponent } from './barra-dashboard/barra-dashboard.component';
import { PagerrorComponent } from './pagerror/pagerror.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BarraDashboardComponent,
    PagerrorComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports:[
    BarraDashboardComponent
  ]

})
export class DashboardModule { }
