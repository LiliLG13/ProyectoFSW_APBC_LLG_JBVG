import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceOrdenesService {
  datosOrdenes = {
    orden:[{
    ID_Platillo: 0,
    ID_Categoria: '',
    nombre: '',
    descripcion: '',
    precio: ''
    }],
    ID_Orden: 0,
    ID_Mesero: '',
    fecha: '',
    fechaIngreso: '',
    mesa: '',
    totalPagar: '',
  };
  constructor() {}
  guardarDatosEmpleado(datosOrdenes: any) {
    this.datosOrdenes = datosOrdenes;
  }
  get obtenerDatos() {
    return this.datosOrdenes;
  }
}
