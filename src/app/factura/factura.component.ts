import { Component, OnInit } from '@angular/core';
import { datosFacturaOrden } from '../extra/SazonVegano.interfaces';
import { ServiceFacturaService } from './service-factura.service';
import { ServicePedidosService } from '../pedidos/service-pedidos.service';
@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css'],
})
export class FacturaComponent implements OnInit {
  constructor(private httpServ: ServiceFacturaService,private httppedido: ServicePedidosService ) {}
  factura: string = '';
  id: string = '';
  hayError: boolean = false;
  datosFactura: datosFacturaOrden[] = [];

  ngOnInit(): void {
    this.buscarFactura();
  }

  buscarFactura() {
   this.id= this.httppedido.getpedido();
    this.hayError = false;
    this.httpServ.obtenerInfoOrdenFactura(parseInt(this.id)).subscribe({
      next: (factura) => {
        console.log('Factura jaja', factura);
        this.datosFactura = factura;
      },
      error: (err: Error) => {
        this.hayError = true;
        this.datosFactura = [];
      },
    });    
  }
}
