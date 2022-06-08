import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceFacturaService {
  datosFactura = {
    ID_factura: 0,
    ID_Cliente: 0,
    ID_Orden: 0,
    fecha: '',
    Importe: '',
    tipoPago: '',
    folio: ''
  };
  constructor() {}
  guardarDatosfactura(datosFactura: any) {
    this.datosFactura = datosFactura;
  }
  get obtenerDatos() {
    return this.datosFactura;
  }
}
