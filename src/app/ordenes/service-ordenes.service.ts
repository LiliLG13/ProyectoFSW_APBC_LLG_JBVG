import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { datosOrdenes } from '../extra/SazonVegano.interfaces';
@Injectable({
  providedIn: 'root'
})
export class ServiceOrdenesService {

  constructor(private http: HttpClient) {}

}
