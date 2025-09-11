// es la nueva version de ecma script para la declaracion de funciones , el objetivo de esta funcion es facilitar la creacion de funcion y que el codigo sea legible
const suma=(a,b)=>{return a+b}
    console.log(suma(23,45))

const saludoNombre=nombre=>{
    let mensaje=` hola, ${nombre}`
    return mensaje
}
console.log(saludoNombre("josema"))

const saludo=()=>{
    return "hola"
}
console.log(saludo())