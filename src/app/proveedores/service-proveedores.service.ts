import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceProveedoresService {
  datosProveedor = {
    ID_Proveedores: 0,
    nombreEmpresa: '',
    telefono: '',
    direccion: '',
    cuidad: '',
    estado: '',
    pais: '',
  };
  constructor() {}
  guardarDatosProveedor(datosProveedor: any) {
    this.datosProveedor = datosProveedor;
  }
  get obtenerDatos() {
    return this.datosProveedor;
  }
}
