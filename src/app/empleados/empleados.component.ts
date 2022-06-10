import { Component, OnInit } from '@angular/core';
import { ServiceEmpleadosService } from './service-empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
})
export class EmpleadosComponent implements OnInit {
  constructor(private httpServ: ServiceEmpleadosService) {}

  ngOnInit(): void {}
}
