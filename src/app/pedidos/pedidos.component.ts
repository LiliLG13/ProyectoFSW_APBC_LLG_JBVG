import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { datospedidoOrdenes } from '../extra/SazonVegano.interfaces';
import { ServicePedidosService } from './service-pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(private httpServ: ServicePedidosService, private router: Router) {

   }
    hayError: boolean = false;
    pedido: datospedidoOrdenes[]=[];    

  ngOnInit(): void {
    this.verOrden()
  }
  verOrden() {
    this.hayError = false;
    this.httpServ.obtenerInfoOrden().subscribe({
      next: (entrada) => {
        console.log(entrada);
        this.pedido=entrada;

      },
      error: (err: Error) => {
        this.hayError = true;
        this.pedido=[];
      },
    })
  }

  abrirfactura19(id: string){
    this.httpServ.setpedido(id)
    this.router.navigateByUrl('/factura')
  }
  }
 

 

