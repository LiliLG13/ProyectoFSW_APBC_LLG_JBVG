export interface datosVerEmpleados {
  ID_Empleados: 0;
  nombre: '';
  fechaNacimiento: Date;
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
  ID_Ingrediente: 0;
  nombre: '';
  marca: '';
  caducidad: '';
  existencia: '';
  costoCompra: '';
}

export interface datosMenu {
  ID_Platillo: 0;
  ID_Categoria: 0;
  nombre: '';
  descripcion: '';
  precio: '';
}

export interface datosProveedor {
  ID_Proveedores: 0;
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
  ID_factura: 0;
  ID_Cliente: 0;
  ID_Orden: 0;
  fecha: '';
  Importe: '';
  tipoPago: '';
  folio: '';
}

export interface datosOrdenes {
  orden: [
    {
      ID_Platillo: 0;
      ID_Categoria: '';
      nombre: '';
      descripcion: '';
      precio: '';
    }
  ];
  ID_Orden: 0;
  ID_Mesero: '';
  fecha: '';
  fechaIngreso: '';
  mesa: '';
  totalPagar: '';
}

export interface datospedidoOrdenes {
  ID_Orden: 0;
  ID_Mesero: '';
  fecha: '';
  fechaIngreso: '';
  mesa: '';
  totalPagar: '';
}
