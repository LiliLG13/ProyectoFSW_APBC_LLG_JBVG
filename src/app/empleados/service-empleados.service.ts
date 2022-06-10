import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { datosEmpleados } from '../extra/SazonVegano.interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceEmpleadosService {
  constructor(private http: HttpClient) {}

   agregarInfoNuevoEmpleado(emp: datosEmpleados): Observable<datosEmpleados[]> {
      console.log(emp)
     return this.http.post<datosEmpleados[]>(`http://localhost:3050/empleados/`, emp);
    }
}
