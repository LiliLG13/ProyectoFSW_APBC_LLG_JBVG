
import { Component, OnInit } from '@angular/core';
import { ServiceLoginService } from './service-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private httpServ: ServiceLoginService, private ruta: Router) {}

  hayError: boolean = false;

  usuario: string = '';
  contra: string = '';
  puesto: string = '';
  contrasenia: string = '';

  ngOnInit(): void {}

  validarUsuario() {
    console.log(this.usuario);
    console.log(this.contra);
    this.hayError = false;
    this.httpServ.obtenerTipoEmp(this.usuario).subscribe({
      next: (puesto) => {
        console.log(puesto);
        this.puesto = puesto.puesto;
        this.contrasenia = puesto.contraseña;
        console.log(this.puesto);
        console.log(this.contrasenia)

        if (this.puesto == 'Mesero' && this.contrasenia==this.contra) {
          window.alert('Bienvenido')
          this.ruta.navigate(['/mainMesero']);
        } else if (this.puesto == 'Cajero' && this.contrasenia==this.contra) {
          window.alert('Bienvenido')
          this.ruta.navigate(['/mainCajero']);
        } else if (this.puesto == 'Gerente' && this.contrasenia==this.contra) {
          window.alert('Bienvenido')
          this.ruta.navigate(['/main']);
        } else {
          window.alert('Acceso denegado')
        }
      },
      error: (err: Error) => {
        this.hayError = true;
        this.puesto = '';
        window.alert('Acceso denegado')
      },
    });

    console.log(this.puesto);
  }
}



