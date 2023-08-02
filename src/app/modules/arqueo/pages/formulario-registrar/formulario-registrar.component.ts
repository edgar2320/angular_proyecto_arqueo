import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NUMBER_ENTERO_VALIDATION } from 'src/app/modules/constants/constantesgenerales';

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
  hora_minima: string = '07:01:00';
  pipe = new DatePipe('en-US');
  fecha_formato!: any;

  //
  constructor(private formBuldier: FormBuilder) {}

  ngOnInit(): void {
    this.fecha_actual = new Date();
    this.formulario_arqueo = this.inicializarFormulario();
    this.formulario_conteo=this.inicializarFormularioConteo();
    //SETEO
    this.setearDatos();
  }

  changeFormat(){
    let ChangedFormat = this.pipe.transform(this.fecha_actual, 'YYYY-MM-dd');
    this.fecha_formato = ChangedFormat;
    console.log(this.fecha_formato);
    return this.fecha_formato;

  }

  setearDatos(){
    this.caja?.setValue("CAJA1");
    this.cajero?.setValue("SISTEMA");
    this.fecha?.setValue(this.changeFormat());
    console.log(this.fecha?.value);

    this.hora_cierre?.setValue("07:01");
    this.hora_apertura?.setValue("07:00");
  }

  inicializarFormulario(): FormGroup {
    return this.formBuldier.group({
      caja: ['', [Validators.required]],
      hora_apertura: ['', [Validators.required]],
      hora_cierre: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      cajero: ['', [Validators.required]],
    });
  }

  inicializarFormularioConteo(): FormGroup {
    return this.formBuldier.group({
      moneda_01: [
        '',
        [Validators.required, Validators.pattern(NUMBER_ENTERO_VALIDATION)],
      ],
      moneda_05: [
        '',
        [Validators.required, Validators.pattern(NUMBER_ENTERO_VALIDATION)],
      ],
      moneda_10: [
        '',
        [Validators.required, Validators.pattern(NUMBER_ENTERO_VALIDATION)],
      ],
      moneda_25: [
        '',
        [Validators.required, Validators.pattern(NUMBER_ENTERO_VALIDATION)],
      ],
      moneda_100: [
        '',
        [Validators.required, Validators.pattern(NUMBER_ENTERO_VALIDATION)],
      ],
      dolar_1: [
        '',
        [Validators.required, Validators.pattern(NUMBER_ENTERO_VALIDATION)],
      ],
      dolar_5: [
        '',
        [Validators.required, Validators.pattern(NUMBER_ENTERO_VALIDATION)],
      ],
      dolar_10: [
        '',
        [Validators.required, Validators.pattern(NUMBER_ENTERO_VALIDATION)],
      ],
      dolar_20: [
        '',
        [Validators.required, Validators.pattern(NUMBER_ENTERO_VALIDATION)],
      ],
      dolar_50: [
        '',
        [Validators.required, Validators.pattern(NUMBER_ENTERO_VALIDATION)],
      ],
      dolar_100: [
        '',
        [Validators.required, Validators.pattern(NUMBER_ENTERO_VALIDATION)],
      ],
      saldo_fisico: [
        '',
        [Validators.required, Validators.pattern(NUMBER_ENTERO_VALIDATION)],
      ],
    });
  }

  //getter de formulario arqueo
  get caja() {
    return this.formulario_arqueo?.get('caja');
  }
  get hora_apertura() {
    return this.formulario_arqueo?.get('hora_apertura');
  }
  get hora_cierre() {
    return this.formulario_arqueo?.get('hora_cierre');
  }
  get fecha() {
    return this.formulario_arqueo?.get('fecha');
  }
  get cajero() {
    return this.formulario_arqueo?.get('cajero');
  }

  //getter de formulario conteo
  get moneda_01() {
    return this.formulario_arqueo?.get('moneda_01');
  }
  get moneda_05() {
    return this.formulario_arqueo?.get('moneda_05');
  }
  get moneda_10() {
    return this.formulario_arqueo?.get('moneda_10');
  }
  get moneda_25() {
    return this.formulario_arqueo?.get('moneda_25');
  }
  get moneda_100() {
    return this.formulario_arqueo?.get('moneda_100');
  }

  get dolar_1() {
    return this.formulario_arqueo?.get('dolar_1');
  }
  get dolar_5() {
    return this.formulario_arqueo?.get('dolar_5');
  }
  get dolar_10() {
    return this.formulario_arqueo?.get('dolar_1');
  }
  get dolar_20() {
    return this.formulario_arqueo?.get('dolar_20');
  }
  get dolar_50() {
    return this.formulario_arqueo?.get('dolar_50');
  }
  get dolar_100() {
    return this.formulario_arqueo?.get('dolar_100');
  }
  //
  //VALIDACIONES
  campoValido(campo: string) {
    const validarCampo = this.formulario_arqueo.get(campo);
    return !validarCampo?.valid && validarCampo?.touched
      ? 'is-invalid'
      : validarCampo?.touched
      ? 'is-valid'
      : '';
  }

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

  registrar() {
   if(this.formularioValido()){
    console.log(this.caja?.value);
    console.log(this.cajero?.value);
    console.log(this.hora_cierre?.value);
    console.log(this.hora_apertura?.value);
    console.log(this.fecha?.value);

    //VALIDACIONES DE HORAS
    // QUE LA HORA ANTERIOR SEA MENOR A LA HORA FINAL, LO QUE CUENTA SON LOS
    //MINUTOS Y SEGUNDOS
   }
  }
}
