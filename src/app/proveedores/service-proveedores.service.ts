import { Injectable } from '@angular/core';
import { datosProveedor } from '../extra/SazonVegano.interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ServiceProveedoresService {
  constructor(private prov: HttpClient) {}
  obtenerInfoProv(): Observable<datosProveedor[]> {
    return this.prov.get<datosProveedor[]>(`http://localhost:3050/proveedores`);
  }
}
