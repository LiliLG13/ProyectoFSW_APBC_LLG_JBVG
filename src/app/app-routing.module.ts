import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlmacenComponent } from './almacen/almacen.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { FacturaComponent } from './factura/factura.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'orden', component: OrdenesComponent },
  { path: 'factura', component: FacturaComponent },
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'almacen', component: AlmacenComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
