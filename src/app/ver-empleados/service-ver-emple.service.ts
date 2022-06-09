import { Injectable } from '@angular/core';
import { datosVerEmpleados } from '../extra/SazonVegano.interfaces'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceVerEmpleService {
  constructor(private http: HttpClient) {}

  obtenerInfoEmpleadosVer(): Observable<datosVerEmpleados[]> {
    return this.http.get<datosVerEmpleados[]>(`http://localhost:3050/verempleados`);
  }
}
