import { Component, OnInit } from '@angular/core';
import { ServiceOrdenesService } from './service-ordenes.service';
import { datosMenu } from '../extra/SazonVegano.interfaces';
import { datosOrdenes } from '../extra/SazonVegano.interfaces';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css'],
})
export class OrdenesComponent implements OnInit {
  
  constructor(private httpServ: ServiceOrdenesService) {
    
  }
  hayError: boolean = false;
  ordenExitosa: boolean = false;
  orden: datosMenu[]=[]; 
  pedidoorden: datosOrdenes[]=[]   
  ngOnInit(): void {
    this.mostrarPlato()
  }
  
  mostrarPlato(){
    this.hayError = false;
    this.httpServ.obtenerNombrePlatillo().subscribe({
      next: (entrada) => {
        console.log(entrada);
        this.orden=entrada;

      },
      error: (err: Error) => {
        this.hayError = true;
        this.orden=[];
      },
    })
  }

  generarPedido(){ this.ordenExitosa = true;}

   
    addPlatillo() {
      this.pedidoorden.push();
    }
  
    /* removeResponsabilidad(i: number) {
      this.datos.laboral[i].responsabilidades.pop();
      if (this.datos.laboral[i].responsabilidades.length == 0) {
        this.datos.laboral[i].responsabilidades.push('');
      }
    } */
  
}
