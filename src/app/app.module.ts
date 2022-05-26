import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { LoginComponent } from './login/login.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { MainComponent } from './main/main.component';
import { AlmacenComponent } from './almacen/almacen.component';
import { FacturaComponent } from './factura/factura.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OrdenesComponent,
    ProveedoresComponent,
    LoginComponent,
    EmpleadosComponent,
    MainComponent,
    AlmacenComponent,
    FacturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
