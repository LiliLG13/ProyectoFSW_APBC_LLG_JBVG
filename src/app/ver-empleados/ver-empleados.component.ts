import { Component, OnInit } from '@angular/core';
import { datosVerEmpleados } from '../extra/SazonVegano.interfaces';
import { ServiceVerEmpleService } from './service-ver-emple.service';

@Component({
  selector: 'app-ver-empleados',
  templateUrl: './ver-empleados.component.html',
  styleUrls: ['./ver-empleados.component.css'],
})
export class VerEmpleadosComponent implements OnInit {
  constructor(private httpServ: ServiceVerEmpleService) {}
  emple: string = '';
  hayError: boolean = false;
  empleados: datosVerEmpleados[] = [];
  ngOnInit(): void {}

  buscarEmpleados() {
    this.hayError = false;
    this.httpServ.obtenerInfoEmpleadosVer().subscribe({
      next: (empleados) => {
        console.log(empleados);
        this.empleados = empleados;
      },
      error: (err: Error) => {
        this.hayError = true;
        this.empleados = [];
      },
    });
  }
}
