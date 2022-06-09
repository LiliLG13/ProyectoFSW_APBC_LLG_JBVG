import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { datospedidoOrdenes } from '../extra/SazonVegano.interfaces';
@Injectable({
  providedIn: 'root'
})
export class ServicePedidosService {

  constructor(private http: HttpClient) {}

}
