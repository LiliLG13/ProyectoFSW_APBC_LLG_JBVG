import { Component, OnInit } from '@angular/core';
import { ServiceEmpleadosService } from './service-empleados.service';
import { datosEmpleados } from '../extra/SazonVegano.interfaces';
import { datosVerEmpleados } from '../extra/SazonVegano.interfaces';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
})
export class EmpleadosComponent implements OnInit {
  constructor(private httpServ: ServiceEmpleadosService) {}
  empleado: datosEmpleados = {
    nombre: '',
    fechaNacimiento: '',
    fechaIngreso: '',
    estadoCivil: '',
    direccion: '',
    telefono: '',
    correo: '',
    puesto: '',
    horasTrabajo: '',
    sexo: '',
    usuario: '',
    pass: '',
  };

  hayError: boolean = false;
  empleadosExistentes: datosVerEmpleados[] = [];
  ngOnInit(): void {}

  agregarEmpleado() {
    this.hayError = false;
    this.httpServ.agregarInfoNuevoEmpleado(this.empleado).subscribe({
      next: (nuevo) => {
        console.log(nuevo);
      },
      error: (err: Error) => {
        this.hayError = true;
      },
    });
  }
}
