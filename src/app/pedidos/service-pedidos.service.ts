import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicePedidosService {
  datospedidoOrdenes = {
    ID_Orden: 0,
    ID_Mesero: '',
    fecha: '',
    fechaIngreso: '',
    mesa: '',
    totalPagar: '',
  };
  constructor() {}
  guardarDatosEmpleado(datospedidoOrdenes: any) {
    this.datospedidoOrdenes = datospedidoOrdenes;
  }
  get obtenerDatos() {
    return this.datospedidoOrdenes;
  }
}
