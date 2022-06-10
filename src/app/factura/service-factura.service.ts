import { Injectable } from '@angular/core';
import { datosFacturaCliente } from '../extra/SazonVegano.interfaces';
import { datosFacturaOrden } from '../extra/SazonVegano.interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceFacturaService {
  constructor(private http: HttpClient) {}

  obtenerInfoClienteFactura(): Observable<datosFacturaCliente[]> {
    return this.http.get<datosFacturaCliente[]>(`http://localhost:3050/factura`);
  }
  obtenerInfoOrdenFactura(id:number): Observable<datosFacturaOrden[]> {
    return this.http.get<datosFacturaOrden[]>(`http://localhost:3050/factura/${id}`);
  }
}
