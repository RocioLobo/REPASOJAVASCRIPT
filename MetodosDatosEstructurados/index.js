//Metodos para trabajar con datos estructurados



//PARA LISTAS (ARRAYS)

//Crear
//Concepto: Es definir una lista de elementos usando corchetes [].

let frutas = ["manzana", "pera", "naranja"];



//Acceder

//Concepto: Obtener un elemento por su posición (índice).

console.log(frutas[2]); //"naranja"


//Modificar

//Concepto: Cambiar el valor de un elemento por su índice.

frutas[2] = "platano";


//Insertar

//Concepto: Agregar un nuevo elemento a la lista.

frutas.push("sandía");      // al final
frutas.unshift("melón");    // al inicio


//Eliminar

//Concepto: Quitar uno o varios elementos de la lista.

frutas.pop();      // elimina el último
frutas.shift();    // elimina el primero
frutas.splice(1, 1); // elimina 1 desde la posición 1


// Ordenar

//Concepto: Reorganizar los elementos del array.

frutas.sort();       // ordena alfabéticamente
frutas.reverse();    // invierte el orden






// PARA OBJETOS

// Crear

//Concepto: Definir un conjunto de datos con propiedades y valores.

let persona = { nombre: "Luis", edad: 30 };


//Acceder

//Concepto: Obtener el valor de una propiedad.

console.log(persona.nombre); // "Luis"


//Modificar

//Concepto: Cambiar el valor de una propiedad.

persona.edad = 31;


//Insertar

//Concepto: Añadir una nueva propiedad al objeto.

persona.ciudad = "Lima";


// Eliminar

//Concepto: Quitar una propiedad del objeto.

delete persona.edad;


//Ordenar (en arrays de objetos)

//Concepto: Organizar una lista de objetos por alguna propiedad.

let personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Juan", edad: 20 }
];

personas.sort((a, b) => a.edad - b.edad);







//¿Qué es scope ?
//Scope (alcance) es el lugar donde una variable puede usarse o ser accedida.
//Hay tres tipos principales de scope:
//Global	La variable se puede usar en todo el código.
//Function	La variable solo vive dentro de una función.
//Block	La variable solo vive dentro de llaves { }, como en if, for, etc.



//¿Qué es var?
//Es una forma antigua de declarar variables,tiene function scope (no respeta los bloques como if, for, etc.) Se puede re-declarar y modificar.

function saludo() {
  if (true) {
    var mensaje = "Hola mundo";
  }
  console.log(mensaje); // Funciona (aunque esté fuera del if)
}
// Problema: puede causar errores por no respetar el bloque.


//¿Qué es let?
//Es una forma moderna de declarar variables,tiene block scope (sí respeta bloques { }),se puede modificar, pero no re-declarar en el mismo bloque.


function saludo() {
  if (true) {
    let mensaje = "Hola mundo";
  }
  console.log(mensaje); //  mensaje no está definido
}

//Es más seguro y controlado que var.
