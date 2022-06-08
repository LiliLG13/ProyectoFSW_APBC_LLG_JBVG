import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceIngredientesService {
  datosEmpleados = {
    ID_Empleados: 0,
    nombre: '',
    fechaNacimiento: '',
    fechaIngreso: '',
    estadoCivil: '',
    direccion: '',
    telefono: '',
    correo: '',
    puesto: '',
    horasTrabajo: '',
    sexo: '',
  };
  constructor() {}
  guardarDatosAlmacen(datosEmpleados: any) {
    this.datosEmpleados = datosEmpleados;
  }
  get obtenerDatos() {
    return this.datosEmpleados;
  }
}
