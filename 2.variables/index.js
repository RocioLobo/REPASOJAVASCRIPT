//1.declarar la variable usando la palabra reservada y asignandole un nombre
let nombreAlumno
//2. inicializacion de la variable en este paso es cuando se le asignara un tip de dato a la variable


//llamo a la variable, hago uso del operador de asignacion,le doy el dato
nombreAlumno="percy"
nombreAlumno="erick"
nombreAlumno="50"



console.log(nombreAlumno)


//existe una tecnica donde declaramos e inicializamos una variable en una sola linea de codigo
let edadAlumno=50
const PI=3.141516
edadAlumno="hola"


console.log(edadAlumno)
console.log(PI)
// solo se usara cuando crearemos la variable luego si deseamos modificar el valor o llamar a la variable solo usaremos el nombre

//scope funciona cuando esta dentro
let edad=30
{
    let edad=30
    edad
}
console.log(edad) 
// var funciona cuando esta fuera igual funcioa