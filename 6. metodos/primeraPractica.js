//crear una lista de objetos de 5 vehiculos que tengan informacion como marca,modelo,año de fabricacion,precio,numero de placa
let vehiculos = [
  { marca: "Toyota", modelo: "Corolla", anio: 2018, precio: 15000, placa: "ABC123" },
  { marca: "Honda", modelo: "Civic", anio: 2020, precio: 18000, placa: "XYZ456" },
  { marca: "Ford", modelo: "Focus", anio: 2017, precio: 12000, placa: "LMN789" },
  { marca: "Chevrolet", modelo: "Cruze", anio: 2019, precio: 16000, placa: "JKL321" },
  { marca: "Hyundai", modelo: "Elantra", anio: 2021, precio: 20000, placa: "PQR654" }
];
//crear funciones para cada uno de estas acciones
//actualizar el valor de una de sus caracteristicas

const actualiza = ("XYZ456", "precio", 14000) => {
  let vehiculo = vehiculos.find(v => v.placa === placa);
  if (vehiculo) {
    vehiculo[campo] = 14000;
    console.log("Vehículo actualizado:", vehiculo);
  } else {
    console.log("Vehículo no encontrado");
  }
}
//agrega un nuevo vehiculo
function agrega(datos) {
  vehiculos.push(datos);
  console.log("Vehículo agregado:", datos);
}

//eliminar un vehiculo
const elimina = function(placa) {
  vehiculos = vehiculos.filter(v => v.placa !== placa);
  console.log("Vehículo eliminado con placa:", placa);
};

// poder filtrar los vehiculos por su año de fabricacion
const filtrarPorAño = (año) => {
  return vehiculos.filter(v => v.año === año);
};
//poder filtrar un solo vehiculo por su numero de placa
const buscarPorPlaca = (placa) => {
  return vehiculos.find(v => v.placa === placa);
};
