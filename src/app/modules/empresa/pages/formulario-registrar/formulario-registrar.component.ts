import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-registrar',
  templateUrl: './formulario-registrar.component.html',
  styleUrls: ['./formulario-registrar.component.css']
})
export class FormularioRegistrarComponent implements OnInit {
  msj_titulo:string="Regresar menú principal";
  constructor() { }

  ngOnInit(): void {
  }

}
