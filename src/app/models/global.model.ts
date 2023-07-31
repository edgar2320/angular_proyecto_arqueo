import Swal from "sweetalert2";

export function MensajeExito(mensaje:string,tiempo:number) {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: `${mensaje}`,
    showConfirmButton: false,
    timer: tiempo
  });

}

export function mensajeAdvertencia(mensaje:string,tiempo:number){
  Swal.fire({
    position: 'center',
    icon: 'warning',
    title: mensaje,
    showConfirmButton: false,
    timer: tiempo
  })
}

