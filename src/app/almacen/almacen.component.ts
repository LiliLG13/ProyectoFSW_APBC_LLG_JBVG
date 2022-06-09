import { Component, OnInit } from '@angular/core';
import { datosIngredientes } from '../extra/SazonVegano.interfaces';
import { ServiceIngredientesService } from './service-ingredientes.service';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css']
})
export class AlmacenComponent implements OnInit {
   constructor(private httpServ:ServiceIngredientesService) { }
  ingrediente: string = '';
  hayError: boolean = false;
  ingredientes:  datosIngredientes[]=[];
 
  ngOnInit(): void {
  }
  buscarIngredientes() {
    this.hayError = false;
    this.httpServ.obtenerInfoAlmacen().subscribe({
      next: (ingredientes) => {
        console.log(ingredientes);
        this.ingredientes=ingredientes;

      },
      error: (err: Error) => {
        this.hayError = true;
        this.ingredientes=[];
      },
    })
  }
}
