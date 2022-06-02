import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlmacenComponent } from './almacen/almacen.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { FacturaComponent } from './factura/factura.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MainCajeroComponent } from './main-cajero/main-cajero.component';
import { MainMeseroComponent } from './main-mesero/main-mesero.component';
import { MenuComponent } from './menu/menu.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'mainCajero', component: MainCajeroComponent },
  { path: 'mainMesero', component: MainMeseroComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'orden', component: OrdenesComponent },
  { path: 'pedidos', component: PedidosComponent },
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
