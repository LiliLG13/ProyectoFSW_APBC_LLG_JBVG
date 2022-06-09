import { Component, OnInit } from '@angular/core';
import { ServiceMenuService } from './service-menu.service';
import { datosMenu } from '../extra/SazonVegano.interfaces';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private httpServ: ServiceMenuService) { }
  plato: string = '';
  hayError: boolean = false;
  platillos: datosMenu[]=[];
  ngOnInit(): void {
  }

  buscarPlatillos(idCategoria:number) {
    this.hayError = false;
    this.httpServ.obtenerInfoMenu(idCategoria).subscribe({
      next: (platillos) => {
        console.log(platillos);
        this.platillos=platillos;

      },
      error: (err: Error) => {
        this.hayError = true;
        this.platillos=[];
      },
    })
  }
}
