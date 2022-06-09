export interface datosVerEmpleados {
  ID_Empleados: '';
  nombre: '';
  fechaNacimiento: '';
  fechaIngreso: '';
  estadoCivil: '';
  direccion: '';
  telefono: '';
  correo: '';
  puesto: '';
  horasTrabajo: '';
  sexo: '';
}

export interface datosIngredientes {
  ID_Ingrediente: '';
  nombre: '';
  marca: '';
  caducidad: '';
  existencia: '';
  costoCompra: '';
}

export interface datosMenu {
  ID_Categoria: '';
  nombreCategoria: '';
  descripcion: '';
  nombrePlatillo: '';
  precio: '';
}

export interface datosProveedor {
  ID_Proveedores: '';
  nombreEmpresa: '';
  telefono: '';
  direccion: '';
  cuidad: '';
  estado: '';
  pais: '';
}

export interface datosLogin {
  Usuario: '';
  Contraeña: '';
  puesto: '';
}

export interface datosFactura {
  ID_factura: '';
  ID_Cliente: '';
  ID_Orden: '';
  fecha: '';
  Importe: '';
  tipoPago: '';
  folio: '';
}

export interface datosOrdenes {
  orden: [
    {
      ID_Platillo: '';
      ID_Categoria: '';
      nombre: '';
      descripcion: '';
      precio: '';
    }
  ];
  ID_Orden: '';
  ID_Mesero: '';
  fecha: '';
  fechaIngreso: '';
  mesa: '';
  totalPagar: '';
}

export interface datospedidoOrdenes {
  ID_Orden: '';
  ID_Mesero: '';
  fecha: '';
  fechaIngreso: '';
  mesa: '';
  totalPagar: '';
}
