import { Injectable } from '@angular/core';
import { tipoEmp } from '../extra/SazonVegano.interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceLoginService {
  constructor(private http: HttpClient) {}

  obtenerTipoEmp(usuario: string): Observable<tipoEmp> {
    return this.http.get<tipoEmp>(`http://localhost:3050/login/${usuario}`);
  }
}