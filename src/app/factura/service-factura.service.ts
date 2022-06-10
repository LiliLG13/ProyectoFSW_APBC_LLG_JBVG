import { Injectable } from '@angular/core';
import { datosFacturaOrden } from '../extra/SazonVegano.interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceFacturaService {
  constructor(private http: HttpClient) {}
  obtenerInfoOrdenFactura(id: number): Observable<datosFacturaOrden[]> {
    return this.http.get<datosFacturaOrden[]>(
      `http://localhost:3050/factura/${id}`
    );
  }
}
