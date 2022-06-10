import { Component, OnInit } from '@angular/core';
import { datosFacturaOrden } from '../extra/SazonVegano.interfaces';
import { datosFacturaCliente } from '../extra/SazonVegano.interfaces';
import { ServiceFacturaService } from './service-factura.service';
@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css'],
})
export class FacturaComponent implements OnInit {
  constructor(private httpServ: ServiceFacturaService) {}
  cliente: string = '';
  factura: string = '';
  hayError: boolean = false;
  datosFactura: datosFacturaOrden[] = [];
  datosCliente: datosFacturaCliente[] = [];

  ngOnInit(): void {
    this.buscarFactura(2421);
    this.buscarCliente();
  }
  buscarFactura(id: number) {
    this.hayError = false;
    this.httpServ.obtenerInfoOrdenFactura(id).subscribe({
      next: (factura) => {
        console.log(factura);
        this.datosFactura = factura;
      },
      error: (err: Error) => {
        this.hayError = true;
        this.datosFactura = [];
      },
    });    
  }
  buscarCliente() {
    this.hayError = false;
    this.httpServ.obtenerInfoClienteFactura().subscribe({
      next: (client) => {
        console.log(client);
        this.datosCliente = client;
      },
      error: (err: Error) => {
        this.hayError = true;
        this.datosCliente = [];
      },
    });
  }
}
