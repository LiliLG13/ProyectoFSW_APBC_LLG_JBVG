export interface datosVerEmpleados {
  ID_Empleado: string;
  nombre: string;
  fechaNacimiento: string;
  fechaIngreso: string;
  estadoCivil: string;
  direccion: string;
  telefono: string;
  correo: string;
  puesto: string;
  horasTrabajo: string;
  sexo: string;
  usuario: string;
  pass: string;
}
export interface tipoEmp{
  puesto:string,
  contraseña: string
}
export interface datosEmpleados {
  nombre: string;
  fechaNacimiento: string;
  fechaIngreso: string;
  estadoCivil: string;
  direccion: string;
  telefono: string;
  correo: string;
  puesto: string;
  horasTrabajo: string;
  sexo: string;
  usuario: string;
  pass: string;
}

export interface datosIngredientes {
  ID_Ingrediente: string;
  nombre: string;
  marca: string;
  caducidad: string;
  existencia: string;
  costoCompra: string;
}

export interface datosMenu {
  nombre: string;
  precio: string;
}

export interface datosCategoria {
  ID_Categoria: string;
  nombreCategoria: string;
  descripcion: string;
}

export interface datosProveedor {
  ID_Proveedor: string;
  nombreEmpresa: string;
  telefono: string;
  direccion: string;
  ciudad: string;
  estado: string;
  pais: string;
}

export interface datosLogin {
  Usuario: string;
  Contraeña: string;
  puesto: string;
}


export interface datosFacturaOrden {
  nombrePlato: string;
  descripcion: string;
  precio: string;
  cantidad: string;
  subtotal: string;
  fecha: string;
  totalPagar: 0;
  nombre: string;
  direccion: string;
  correo: string;
  idfactura: string;
}

export interface datosOrdenes {
  orden: [
    {
      nombre: string;
      cantidad: string;
    }
  ];
  ID_Orden: string;
  ID_Mesero: string;
  fecha: string;
  mesa: string;
  totalPagar: string;
}

export interface datospedidoOrdenes {
  ID_Orden: string;
  fecha: string;
  estatus: string;
  mesa: string;
  totalPagar: string;
}
