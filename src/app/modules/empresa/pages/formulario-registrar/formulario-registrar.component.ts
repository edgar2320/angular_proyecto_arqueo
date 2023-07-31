import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../model/empresa.model';
import { EmpresaService } from '../../services/empresa.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  EMAIL_VALIDATION,
  PHONE_VALIDATION,
} from 'src/app/modules/constants/constantesgenerales';
import { IMensajeResponse } from 'src/app/interfaces/global.interface';
import { MensajeExito, mensajeAdvertencia } from 'src/app/models/global.model';

@Component({
  selector: 'app-formulario-registrar',
  templateUrl: './formulario-registrar.component.html',
  styleUrls: ['./formulario-registrar.component.css'],
})
export class FormularioRegistrarComponent implements OnInit {
  accion: string = 'Registrar Empresa';
  mensaje!: IMensajeResponse;
  msj_titulo: string = 'Regresar menú principal';
  empresa!: Empresa;
  formulario_empresa!: FormGroup;
  constructor(
    private EmpresaService: EmpresaService,
    private formBuldier: FormBuilder
  ) {}
  ngOnInit(): void {
    this.formulario_empresa = this.inicializarFormulario();
    this.getEmpresa();
  }

  public getEmpresa() {
    console.log('llega');

    this.EmpresaService.getEmpresa().subscribe(
      {
        next:(respuesta)=>{
          this.empresa=respuesta;
          this.formulario_empresa.patchValue(this.empresa);
          this.accion='Modificar Empresa';
        },
        error:(e)=>{
         this.accion='Registrar Empresa';
        }
      }
    );
  }

  public saveEmpresa() {
    if (this.formularioValido()) {
      this.empresa = new Empresa(
        0,
        this.nombre?.value,
        this.correo?.value,
        this.telefono?.value
      );
      console.log(this.empresa);
      if (this.accion == 'Registrar Empresa') {
        this.guardarEmpresa();
      } else {
        this.modificarEmpresa();
      }
    } else {
      mensajeAdvertencia(
        'Por favor complete correctamente todos los campos',
        1500
      );
    }
  }

  guardarEmpresa() {
    this.EmpresaService.saveEmpresa(this.empresa).subscribe({
      next: (respuesta) => {
        console.log(respuesta);
        this.mensaje = respuesta;
        MensajeExito(this.mensaje.mensaje, 1500);
        this.formulario_empresa.reset();
        this.formulario_empresa.patchValue(this.empresa);
        this.accion = 'Modificar Empresa';
      },
      error: (e) => console.log(e),
    });
  }

  modificarEmpresa() {
    this.EmpresaService.updateEmpresa(this.empresa).subscribe({
      next: (respuesta) => {
        console.log(respuesta);
        this.mensaje = respuesta;
        MensajeExito(this.mensaje.mensaje, 1500);
        this.formulario_empresa.reset();
        this.formulario_empresa.patchValue(this.empresa);
      },
      error: (e) => console.log(e),
    });
  }

  //AREA DE TRABAJO DE FORMULARIOS REACTIVOS
  public inicializarFormulario(): FormGroup {
    return this.formBuldier.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
      ],
      correo: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
          Validators.pattern(EMAIL_VALIDATION),
        ],
      ],
      telefono: [
        '',
        [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(9),
          Validators.pattern(PHONE_VALIDATION),
        ],
      ],
    });
  }

  //CREACION DE METODOS GET DE FRM REACTIVO

  get nombre() {
    return this.formulario_empresa?.get('nombre');
  }
  get correo() {
    return this.formulario_empresa?.get('correo');
  }
  get telefono() {
    return this.formulario_empresa?.get('telefono');
  }

  //
  campoValido(campo: string) {
    const validarCampo = this.formulario_empresa.get(campo);
    return !validarCampo?.valid && validarCampo?.touched
      ? 'is-invalid'
      : validarCampo?.touched
      ? 'is-valid'
      : '';
  }

  formularioValido(): Boolean {
    let estado: boolean = false;
    if (this.formulario_empresa.valid) {
      estado = true;
    } else {
      estado = false;
      Object.values(this.formulario_empresa.controls).forEach((control) =>
        control.markAllAsTouched()
      );
    }
    return estado;
  }
}
