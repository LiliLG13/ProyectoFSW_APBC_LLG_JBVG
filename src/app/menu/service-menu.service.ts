import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { datosMenu } from '../extra/SazonVegano.interfaces';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceMenuService {

  constructor(private menu: HttpClient ) {}

  obtenerInfoMenu(idCategoria:number): Observable<datosMenu[]> {
    return this.menu.get<datosMenu[]>(`http://localhost:3050/menu`);
  }
}
