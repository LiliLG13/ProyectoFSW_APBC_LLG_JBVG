import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { datospedidoOrdenes } from '../extra/SazonVegano.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ServicePedidosService {
  private idpedido: string = '';

  constructor(private http: HttpClient) {}

  obtenerInfoOrden(): Observable<datospedidoOrdenes[]> {
    return this.http.get<datospedidoOrdenes[]>(`http://localhost:3050/pedidos`);
  }

  getpedido() {
    return this.idpedido;
  }
  setpedido(id: string) {
    this.idpedido = id;
  }
}
