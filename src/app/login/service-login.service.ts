import { Injectable } from '@angular/core';
import { datosLogin } from '../extra/SazonVegano.interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceLoginService {
  constructor(private http: HttpClient) {}
}
