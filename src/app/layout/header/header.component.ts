import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  estado:string='display:none';
  activar:boolean=false;
  tipo_icono:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  mostrarMenuOpciones(){
    if(this.activar==false){
        this.estado='display:block'
        this.activar=true;
        this.tipo_icono=true;
    }else{
      this.activar=false;
      this.estado='display:none'
      this.tipo_icono=false;
    }
  }

}
