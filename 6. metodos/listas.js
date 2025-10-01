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



const miFuncion=a=>{}
let numeros=[1,2,3,4,5,6]
numeros.forEach(n=>{console.log(n+1)})


let number=[1,2,3,4,5,6]
let nuewNumber=numeros.map(n=>{return n+1})
console.log(nuewNumber)


let fruits=['pera','higo','tomato']
let estaPera=fruits.includes('pera')
console.log(estaPera)
let estaNaranja=fruits.includes('naranja')
console.log(estaNaranja)



let listNumber=[10,11,3,20,5]
// obtener  en una lista los numeros mayores a 10
let mayorDiez=listNumber.filter(n=>{return n>10})
console.log(mayorDiez)

// de una lista de numerodel 1a 10 usando filter eliminar el numero 1
let unoDiez=[1,2,3,4,5,6,7,8,9,10]
let listaSinUno=unoDiez.filter(n=>{return n!=1})
console.log(listaSinUno)