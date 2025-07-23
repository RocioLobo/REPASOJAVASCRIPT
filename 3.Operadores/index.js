//operadores unarios
//operador de negacion
// operador esta a la izquierda del valor y como resultado obtenemos otro valor.
let negacion=!false
// expresion es un valor complejo que sera solucionado y nos producira o retorna un nuevo valor funciona con false o true.
console.log(negacion)


// operadores binarios
// son los que evaluan dos valores y nos dan como resultado un nuevo valor.
let suma=34+20
let resta=4-8
let producto=3*5
let divicion=3/3
let potencia=3**3
let residuo=10%3
console.log(residuo)



// operadores de comparacion
//Se usan para comparar dos valores y devuelven true o false.

let a = 10;
let b = 5;

console.log(a == b);    // false, porque 10 no es igual a 5
console.log(a != b);    // true, porque 10 es diferente de 5
console.log(a > b);     // true, porque 10 es mayor que 5
console.log(a < b);     // false, porque 10 no es menor que 5
console.log(a >= 10);   // true, porque 10 es igual a 10
console.log(b <= 5);    // true, porque 5 es igual a 5


// operadores logicos
//Se usan para combinar valores booleanos.
//ll: operador logico OR
//&&:AND logico
//!x:negacio not logico

let x = true;
let y = false;

console.log(x && y);   // false, porque ambos no son verdaderos
console.log(x || y);   // true, porque al menos uno es verdadero
console.log(!x);       // false, porque invierte el valor de true a false


// operadores ternario
//Es una forma corta de hacer una condición if-else.

let edad = 18;
let mensaje = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad";
console.log(mensaje);  // "Es mayor de edad"
