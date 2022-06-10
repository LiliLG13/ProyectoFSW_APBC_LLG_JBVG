import { Component, OnInit } from '@angular/core';
import { datosProveedor } from '../extra/SazonVegano.interfaces';
import { ServiceProveedoresService } from './service-proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css'],
})
export class ProveedoresComponent implements OnInit {
  constructor(private httpServ: ServiceProveedoresService) {}
  prov: string = '';
  hayError: boolean = false;
  proveedor: datosProveedor[] = [];
  ngOnInit(): void {
    this.buscarProveedores()
  }
  buscarProveedores() {
    this.hayError = false;
    this.httpServ.obtenerInfoProv().subscribe({
      next: (proveedor) => {
        console.log(proveedor);
        this.proveedor = proveedor;
      },
      error: (err: Error) => {
        this.hayError = true;
        this.proveedor = [];
      },
    });
  }
}
