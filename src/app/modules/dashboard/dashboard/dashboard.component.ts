import { Component, OnInit } from '@angular/core';
import { LOGO_CAJA, LOGO_EMPRESA, LOGO_INFORMES } from './constants/imagenesdashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  empresa:string=LOGO_EMPRESA;
  caja:string=LOGO_CAJA;
  informe:string=LOGO_INFORMES;
  msj_titulo:string="Menú principal";
  constructor() { }

  ngOnInit(): void {
  }

}
