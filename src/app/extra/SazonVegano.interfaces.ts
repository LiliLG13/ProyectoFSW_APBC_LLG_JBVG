export interface datosVerEmpleados {
  ID_Empleado: '';
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
  usuario: '';
  pass: '';
}
export interface tipoEmp{
  puesto:'',
  contraseña: ''
}
export interface datosEmpleados {
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
  usuario: '';
  contraseña: '';
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
  nombre: '';
  precio: '';
}

export interface datosCategoria {
  ID_Categoria: '';
  nombreCategoria: '';
  descripcion: '';
}

export interface datosProveedor {
  ID_Proveedor: '';
  nombreEmpresa: '';
  telefono: '';
  direccion: '';
  ciudad: '';
  estado: '';
  pais: '';
}

export interface datosLogin {
  Usuario: '';
  Contraeña: '';
  puesto: '';
}


export interface datosFacturaOrden {
  nombrePlato: '';
  descripcion: '';
  precio: '';
  cantidad: '';
  subtotal: '';
  fecha: '';
  totalPagar: 0;
  nombre: '';
  direccion: '';
  correo: '';
  idfactura: '';
}

export interface datosOrdenes {
  orden: [
    {
      nombre: '';
      cantidad: '';
    }
  ];
  ID_Orden: '';
  ID_Mesero: '';
  fecha: '';
  mesa: '';
  totalPagar: '';
}

export interface datospedidoOrdenes {
  ID_Orden: '';
  fecha: '';
  estatus: '';
  mesa: '';
  totalPagar: '';
}
