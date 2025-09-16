/*
1. crearun programa, haciendo uso de una funcion debera recibir un texto y la vocal a buscar y retorna la cantidad de veces que se encuentra dicha vocal.
hacer uso de los metodos para string
*/

function countVocals(texto, vocal) {
    let newText=texto.ToLowerCase()
    let newVocals=vocal.ToLowerCase()
    let cantidadVocales=0
    for (let i = 0; i < newText.length; i++) {
        if(newText[i]== newVocals){
            // cantidadVocales=cantidadVocales+1
            cantidadVocales+=1
            // cantidadVocales++

        }
    }
  return cantidadVocales
}
let miTexto=" mi mama me ama"
let searchVocals="0"
console.log(countVocals(miTexto,searchVocals))

// otra manera de hacer
let otroTexto="hola como estas"
let vo="0"
const contarVocales=(txt,v)=>{
    return txt.toLowerCase().split(v.toLowerCase()).length-1
}
console.log(contarVocales(otroTexto,vo))

/**
 * 2. Crear un programa que haciendo uso de una funcion pueda recibir una lista de amigos y que retorne otra lista pero con los nombres en mayuscula
 */
// Función que convierte la lista de amigos a mayúsculas
function textMayusculas(lista) {
  let nuevaLista = [];
  for (let i = 0; i < lista.length; i++) {
    nuevaLista[i].lista[i].toUpperCase()

  }

  return nuevaLista;
}

// Ejemplo
let amigos = ["Ana", "Ruth", "Josema"];
console.log(textoMayusculas(amigos));