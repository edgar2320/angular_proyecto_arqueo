import { AbstractControl, ValidationErrors } from '@angular/forms';

export class Validacionespersonalizadas {
  static validarHoras(
    hora_apertura: AbstractControl,
    hora_cierre: AbstractControl
  ): ValidationErrors | null {
    //null si es correcto
    let hora_inicio: string = hora_apertura?.value;
    hora_inicio = hora_inicio.replace(':', '.');
    let hora_fin: string = hora_cierre?.value;
    hora_fin = hora_fin.replace(':', '.');
    let hora1:number=parseFloat(hora_inicio);
    let hora2:number=parseFloat(hora_fin);
    if(hora1<=hora2){
       return {validarHoras: false };
    }else{
      return null;
    }
  }

}
