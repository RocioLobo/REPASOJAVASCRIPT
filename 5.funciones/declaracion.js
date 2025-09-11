// crear funciones para el manejo de operadores aritmeticos
let  numeroUno=34
let  numeroDos=37
let suma=numeroUno+numeroDos
console.log(suma)


let numeroUno1=36
let numeroDos2=67
let suma2=numeroUno+numeroDos
console.log(suma2)

// funcion por declaracion
function sumaDeDosNumeros(a,b){    // son posicionales
    return a+b 
}

// llamado argumentos posiscionales
console.log(sumaDeDosNumeros(34+37))

// llamado argumentos Nominales
console.log(sumaDeDosNumeros)(b=45,b=67)
