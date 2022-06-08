import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceMenuService {
  datosMenu = {
    ID_Platillo: 0,
    ID_Categoria: '',
    nombre: '',
    descripcion: '',
    precio: '',
  };
  constructor() {}
  guardarDatosProveedor(datosMenu: any) {
    this.datosMenu = datosMenu;
  }
  get obtenerDatos() {
    return this.datosMenu;
  }
}
