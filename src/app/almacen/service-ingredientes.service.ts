import { Injectable } from '@angular/core';
import { datosIngredientes } from '../extra/SazonVegano.interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ServiceIngredientesService {
  constructor(private http: HttpClient) {}

  obtenerInfoAlmacen(): Observable<datosIngredientes[]> {
    return this. http.get<datosIngredientes[]>(`http://localhost:3050/almacen`);
  }
}
