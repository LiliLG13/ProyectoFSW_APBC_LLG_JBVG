import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { datosEmpleados } from '../extra/SazonVegano.interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceEmpleadosService {
  constructor(private emple: HttpClient) {}

  //  obtenerInfoMenu(): Observable<datosEmpleados[]> {
  //   return this.emple.get<datosEmpleados[]>(`http://localhost:3050/empleados`);
  //  }
}
