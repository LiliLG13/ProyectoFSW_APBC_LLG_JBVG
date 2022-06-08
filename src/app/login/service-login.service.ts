import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceLoginService {
  datosLogin = {
    Usuario: '',
    Contraeña: '',
    puesto: '',
  };
  constructor() {}
  guardarDatosLogin(datosLogin: any) {
    this.datosLogin = datosLogin;
  }
  get obtenerDatos() {
    return this.datosLogin;
  }
}
