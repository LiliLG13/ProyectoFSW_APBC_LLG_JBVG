import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { datosMenu } from '../extra/SazonVegano.interfaces';
@Injectable({
  providedIn: 'root',
})
export class ServiceOrdenesService {
  constructor(private http: HttpClient) {}

  obtenerNombrePlatillo(): Observable<datosMenu[]> {
    return this.http.get<datosMenu[]>(`http://localhost:3050/orden`);
  }
}
