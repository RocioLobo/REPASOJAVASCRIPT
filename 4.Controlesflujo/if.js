//Estructura de una condicion
//1. Palabra reservada: IF
// el cuerpo de IF solo se ejecuta si es verdadero
//2. cuando dice "la condicion" o "exprecion a evaluar" sera un tipo de datos booleano.La la exprecion debe estar en parentesis
//3. El cuerpo que contendra el codigo a ejecutar en caso la condicionsea verdadera
//4. palabra reservada ELSE 
//5. cuerpo que cotendra el codigo a ejecutar en caso la exprecion sea FALSO
/////extencion que formatea el codigo e indica donde poner los punto y coma, ESLIN
if (true) {
    let suma=24+45;
    let divi=45/5;
    console.log(suma,divi);
}else{
    console.log("me ejecuto por que soy falso")
};

// crea un programa que evalue si un numero es mayor que otro y si este numero es a la vez un nuevo par
let firtsNumber=51
let secondNumber=30
if (firtsNumber>secondNumber){
    if (firtsNumber%2 == 0){
        console.log("el numero es mayor y par")
    }else{
        console.log("el numero es mayor pero es impar")
    }
}else{
    console.log("el numero es menor")
}

//crear programa que muestre el numero en texto

let numero=5;

if (numero === 1) {
  console.log("uno")
} else if (numero === 2) {
  console.log("Dos") 
} else if (numero === 3) {
 console.log("Tres") 
} else if (numero === 4) {
  console.log("Cuatro") 
} else if (numero === 5) {
  console.log("Cinco")
}

switch(numero){
    case 1:
        console.log("uno")
        break
    default:
        console.log("fuera del rango")
        break
}