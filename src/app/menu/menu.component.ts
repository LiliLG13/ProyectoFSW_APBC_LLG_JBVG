import { Component, OnInit } from '@angular/core';
import { ServiceMenuService } from './service-menu.service';
import { datosMenu } from '../extra/SazonVegano.interfaces';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(private httpServ: ServiceMenuService) {}
  plato: string = '';
  hayError: boolean = false;
  platosE: datosMenu[] = [];
  platosF: datosMenu[] = [];
  platosP: datosMenu[] = [];
  platosD: datosMenu[] = [];
  platosI: datosMenu[] = [];
  ngOnInit(): void {}

  buscarPlatillosEntrada() {
    this.hayError = false;
    this.httpServ.obtenerInfoMenu(1).subscribe({
      next: (entrada) => {
        console.log(entrada);
        this.platosE = entrada;
      },
      error: (err: Error) => {
        this.hayError = true;
        this.platosE = [];
      },
    });
  }

  buscarPlatillosFuerte() {
    this.hayError = false;
    this.httpServ.obtenerInfoMenu(2).subscribe({
      next: (FUERTE) => {
        console.log(FUERTE);
        this.platosF = FUERTE;
      },
      error: (err: Error) => {
        this.hayError = true;
        this.platosF = [];
      },
    });
  }

  buscarPlatillosPostre() {
    this.hayError = false;
    this.httpServ.obtenerInfoMenu(3).subscribe({
      next: (postre) => {
        console.log(postre);
        this.platosP = postre;
      },
      error: (err: Error) => {
        this.hayError = true;
        this.platosP = [];
      },
    });
  }

  buscarPlatillosDrinks() {
    this.hayError = false;
    this.httpServ.obtenerInfoMenu(4).subscribe({
      next: (bebidas) => {
        console.log(bebidas);
        this.platosD = bebidas;
      },
      error: (err: Error) => {
        this.hayError = true;
        this.platosD = [];
      },
    });
  }

  buscarPlatillosinfantil() {
    this.hayError = false;
    this.httpServ.obtenerInfoMenu(5).subscribe({
      next: (infantil) => {
        console.log(infantil);
        this.platosI = infantil;
      },
      error: (err: Error) => {
        this.hayError = true;
        this.platosI = [];
      },
    });
  }
}
