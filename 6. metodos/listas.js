let lista=[]
lista[0]="manzana"
lista[1]="pera"
console.log(lista.length)
console.log(lista)

//. crear una lista vacia y agregar de manera automatica los numeros pares que existen entre 0 y 20.

let numerosPares=[]
for(let i=1;i<=20;i++){
    if(i %2==0){
        numerosPares[numerosPares.length]=1
    }
}
numerosPares

let numPar=[]
let contador=0
for(let i=1;i<=20;i++){
    if(i%2==0){
        numPar[contador]=i
        contador++
    }
}
numPar

let numberPars=[]
for(let i=1;i<=20;i++){
    if(i%2===0){
        numberPars.push(i)
    }
}
console.log(numberPars)


let  amigos=['e','i','o']
amigos.unshift('a')//agrega al inicio
amigos.push('u')// agrega al final
console.log(amigos)




let frutas=['manzana','piña','cereza']
frutas.pop()// elimina el  ultimo elemento
frutas.shift()// elimina el primer elemento
frutas


let texto=["hola","como"," ","estas"]
delete texto[2]
texto


let vocals=['a','e','e','i','o','u']
vocals.splice(2,1)
vocals

let amigosPrimaria=['alfredi','luis','edgar']
let amigosSecundaria=['edison','remy','miguel']
let amigosSuperior=['josue','marlon','handy']
let friends=amigosPrimaria.concat(amigosSecundaria,amigosSuperior)
friends