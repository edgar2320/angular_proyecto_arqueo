import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { NAME_VALIDATION, NUMBER_ENTERO_VALIDATION } from 'src/app/modules/constants/constantesgenerales';
import { EncabezadoArqueo } from '../../models/arqueo.model';

@Component({
  selector: 'app-formulario-registrar',
  templateUrl: './formulario-registrar.component.html',
  styleUrls: ['./formulario-registrar.component.css'],
})
export class FormularioRegistrarComponent implements OnInit {
  msj_titulo: string = 'Regresar menú principal';
  fecha_actual!: Date;
  formulario_arqueo!: FormGroup;
  formulario_conteo!: FormGroup;
  //
  pipe = new DatePipe('en-US');
  fecha_formato!: any;
  //
  EncabezadoArqueo!: EncabezadoArqueo;
  constructor(private formBuldier: FormBuilder) {}

  ngOnInit(): void {
    this.fecha_actual = new Date();
    this.formulario_arqueo = this.inicializarFormulario();
    this.formulario_conteo = this.inicializarFormularioConteo();
    this.setearDatos();
    //SETEO
  }
  //FUNCION PARA OBTENER LA FECHA DEL SISTEMA Y DARLE FORMATO PARA PONERLA EN UN INPUT DATE
  changeFormat() {
    let ChangedFormat = this.pipe.transform(this.fecha_actual, 'YYYY-MM-dd');
    this.fecha_formato = ChangedFormat;
    console.log(this.fecha_formato);
    return this.fecha_formato;
  }

  //FUNCION PARA MOSTRAR DATOS AL CARGAR LA PAGINA EN EL FORMULARIO
  setearDatos() {
    this.nombrecaja?.setValue('CAJA1');
    this.nombrecajero?.setValue('SISTEMA');
    this.fechaarqueo?.setValue(this.changeFormat());
    console.log(this.fechaarqueo?.value);
    this.horacierre?.setValue('07:01');
    this.horaapertura?.setValue('07:00');
    //PARA MODIFICAR UNA VALIDACION YA INICIALIZADA
    this.horacierre?.setValidators([Validators.required, this.validarHoras()]);
  }
  //INICIALIZACION Y REGLAS DE VALIDACION DEL FORMULARIO DE ENCABEZADO
  inicializarFormulario(): FormGroup {
    return this.formBuldier.group({
      nombrecaja: ['', [Validators.required]],
      horaapertura: ['', [Validators.required]],
      horacierre: ['', [Validators.required]],
      fechaarqueo: ['', [Validators.required]],
      nombrecajero: ['', [Validators.required,Validators.pattern(NAME_VALIDATION)]],
    });
  }
  //VALIDACION PERSONALIZADA, LA CUAL EVALUA QUE LA HORA DE CIERRE SEA MAYOR A LA DE INICIO
  validarHoras(): ValidatorFn {
    //null si es correcto
    return () => {
      let hora_inicio: string = this.horaapertura?.value;
      hora_inicio = hora_inicio.replace(':', '.');
      let hora_fin: string = this.horacierre?.value;
      hora_fin = hora_fin.replace(':', '.');
      let hora1: number = parseFloat(hora_inicio);
      let hora2: number = parseFloat(hora_fin);
      console.log(hora1 + '<=' + hora2);
      if (hora2 <= hora1) {
        return { validarHoras: true };
      } else {
        return null;
      }
    };
  }

  //INICIALIZACION DE FORMULARIO DE CONTEO DE CANTIDAD DE DOLARES Y MONEDAS
  inicializarFormularioConteo(): FormGroup {
    return this.formBuldier.group({
      moneda_01: [
        '0',
        [Validators.required, Validators.pattern(NUMBER_ENTERO_VALIDATION)],
      ],
      moneda_05: [
        '0',
        [Validators.required, Validators.pattern(NUMBER_ENTERO_VALIDATION)],
      ],
      moneda_10: [
        '0',
        [Validators.required, Validators.pattern(NUMBER_ENTERO_VALIDATION)],
      ],
      moneda_25: [
        '0',
        [Validators.required, Validators.pattern(NUMBER_ENTERO_VALIDATION)],
      ],
      moneda_100: [
        '0',
        [Validators.required, Validators.pattern(NUMBER_ENTERO_VALIDATION)],
      ],
      dolar_1: [
        '0',
        [Validators.required, Validators.pattern(NUMBER_ENTERO_VALIDATION)],
      ],
      dolar_5: [
        '0',
        [Validators.required, Validators.pattern(NUMBER_ENTERO_VALIDATION)],
      ],
      dolar_10: [
        '0',
        [Validators.required, Validators.pattern(NUMBER_ENTERO_VALIDATION)],
      ],
      dolar_20: [
        '0',
        [Validators.required, Validators.pattern(NUMBER_ENTERO_VALIDATION)],
      ],
      dolar_50: [
        '0',
        [Validators.required, Validators.pattern(NUMBER_ENTERO_VALIDATION)],
      ],
      dolar_100: [
        '0',
        [Validators.required, Validators.pattern(NUMBER_ENTERO_VALIDATION)],
      ],
      saldo_fisico: [
        '0',
        [Validators.required, Validators.pattern(NUMBER_ENTERO_VALIDATION)],
      ],
    });
  }

  //METODOS GETTER DE FORMULARIO DE ENCABEZADO
  get nombrecaja() {
    return this.formulario_arqueo?.get('nombrecaja');
  }
  get horaapertura() {
    return this.formulario_arqueo?.get('horaapertura');
  }
  get horacierre() {
    return this.formulario_arqueo?.get('horacierre');
  }
  get fechaarqueo() {
    return this.formulario_arqueo?.get('fechaarqueo');
  }
  get nombrecajero() {
    return this.formulario_arqueo?.get('nombrecajero');
  }

  //METODOS GETTER DE FORMULARIO DE CONTEO DE MONEDAS Y DOLARES
  get moneda_01() {
    return this.formulario_conteo?.get('moneda_01');
  }
  get moneda_05() {
    return this.formulario_conteo?.get('moneda_05');
  }
  get moneda_10() {
    return this.formulario_conteo?.get('moneda_10');
  }
  get moneda_25() {
    return this.formulario_conteo?.get('moneda_25');
  }
  get moneda_100() {
    return this.formulario_conteo?.get('moneda_100');
  }

  get dolar_1() {
    return this.formulario_conteo?.get('dolar_1');
  }
  get dolar_5() {
    return this.formulario_conteo?.get('dolar_5');
  }
  get dolar_10() {
    return this.formulario_conteo?.get('dolar_1');
  }
  get dolar_20() {
    return this.formulario_conteo?.get('dolar_20');
  }
  get dolar_50() {
    return this.formulario_conteo?.get('dolar_50');
  }
  get dolar_100() {
    return this.formulario_conteo?.get('dolar_100');
  }

  //METODO QUE COMPRUEBA SI LA VALIDACION REACTIVA ES CORRECTA
  campoValido(campo: string) {
    const validarCampo = this.formulario_arqueo.get(campo);
    return !validarCampo?.valid && validarCampo?.touched
      ? 'is-invalid'
      : validarCampo?.touched
      ? 'is-valid'
      : '';
  }

  campoValidoConteo(campo: string) {
    const validarCampo = this.formulario_conteo.get(campo);
    return !validarCampo?.valid && validarCampo?.touched
      ? 'is-invalid'
      : validarCampo?.touched
      ? 'is-valid'
      : '';
  }
  //METODO QUE EVALUA SI TODOS LOS CAMPOS CUMPLEN LAS REGLAS DE VALIDACION
  formularioValido(): Boolean {
    let estado: boolean = false;
    if (this.formulario_arqueo.valid) {
      estado = true;
    } else {
      estado = false;
      Object.values(this.formulario_arqueo.controls).forEach((control) =>
        control.markAllAsTouched()
      );
    }
    return estado;
  }

  formularioValidoConteo(): Boolean {
    let estado: boolean = false;
    if (this.formulario_arqueo.valid) {
      estado = true;
    } else {
      estado = false;
      Object.values(this.formulario_arqueo.controls).forEach((control) =>
        control.markAllAsTouched()
      );
    }
    return estado;
  }

  guardarConteo() {
    if (this.formularioValidoConteo()) {
    }
  }

  //METODO PARA REGISTRAR LA OPERACION
  registrar() {
    if (this.formularioValido()) {
      this.EncabezadoArqueo = new EncabezadoArqueo(
        0,
        this.nombrecaja?.value,
        this.nombrecajero?.value,
        this.horaapertura?.value,
        this.horacierre?.value,
        this.fechaarqueo?.value
      );
    }
  }
}
