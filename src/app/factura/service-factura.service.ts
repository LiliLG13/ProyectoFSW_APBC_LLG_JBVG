import { Injectable } from '@angular/core';
import { datosFactura } from '../extra/SazonVegano.interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceFacturaService {
  constructor(private http: HttpClient) {}
}
