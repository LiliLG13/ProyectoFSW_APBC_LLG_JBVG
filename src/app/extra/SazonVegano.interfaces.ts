export interface datosVerEmpleados {
  ID_Empleados: 0;
  nombre: '';
  fechaNacimiento:Date;
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
    ID_Proveedores: 0,
    nombreEmpresa: '',
    telefono: '',
    direccion: '',
    cuidad: '',
    estado: '',
    pais: '',
  }