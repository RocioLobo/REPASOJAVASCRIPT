# taller de repaso javascript
> [!WARNING] observacion:quokka se debe ejecutar en cada archivo.

> [!TIP]quokka detecta que en nuestro proyecto tenemos nodejs y lo ejecuta para poder ver la consola en vivo.
## 1. tipos de datos
es la manera como capturamos la informacion en java script se clasifican en dos grandes grupos.
> [!TIP] Javascript  tiene funciones predeterminadas por ejemplo para mostrar un mensaje por consola console.log(), para poder verificar que tipo de datos estamos manejando en javascrip tambien tenemos una funcion por defecto llamada typeof `typeof()`
> 
### Primitivos
son datos que siempre existiran
1. numericos 
   - enteros positivos
   - enteros negativos :son los numeros que mas bits ocuparan en la memoria
   - decimal positivo: son los mas graandes
   - decimal negativo
   - NaN (Not a number)
2. texto
   - caracteres    - 10001001 -97 -A
   - Caracteres especiales : tienen 16 bits -0100
   - string
3. booleanos
   - true -1
   - false -0


### Estructurados

1. Array (lista)
   - array de tipo numerico
   - array de tipo string
   - array de tipo mixto 
   - como esta estructura un array en javascript
 - ![alt text](image.png)

2. Objetos(diccionario)
son similares a las listas con la unica diferencia que en vez de tener valor e indice sus elementos trabajan con clave:valor
- como esta estructurado un objeto en javascript
- ![alt text](image-1.png)


## 2. variables(enlaces,binding)
es la tecnica que se usa para poder apuntar a una direcciob en memoria y al valor o dato relacionado o que se encuentre almacenado en ese momento.
tenemos dos pasos para creara una variable
1. primero declarar la variable/constante
2. segundo inicializar la variable/constante
**Observacion** para crear una variable primero tenemos que crear el enlace luego darle el nombre de la variable/constante:para las variables tenemos las palabras reservadas `keyword` - `let` ,  `var`, para las constantes tenemos la palabra reservada `keyword` - `const`
**Recomendaciones**
`let` usar cuando el valor tendra que variar
`const` usar cuando el valor sera el mismo siempre
 `var` evitar usar.
 `let` ,  `var` ambos nos permiten crear variables su unica diferenca es el alcanse ambito o `scope`
 averiguar


## 3. operadores
su clasificacion general se divide en tres
1. operadores unarios
   los operadores unarios son aquellos que estan ubicados a la izquierda del valor y que retornan un nuevo valor.
- operador de negacion
  
1. operadores binarios
   son aquellos que estan en medio de dos valores y que tetornan un unico valor
- operadores aritmeticos
- operadores de comparacion
- operadores logicos
  
1. operadores ternarios
   los operadores ternarios son aquellos que evaluan tres valores y que retornan un solo valor.
- operador condicional
  
## 4. controles de flujo
Nuestros programas en JS contienen mas de una sentencia y las sentencias son ejecutadas una a una como si fuera una historia, de arriba hacia abajo. 
- control de decision (if-else): JavaScript nos permite permite crear caminos alternativos en nuestro programa, dependiendo de una desiciona esto se le conoce como caminos o ejecucioncondiciconal, que ejecutara una sentencia u otra teniendo en cuenta la condicion asi podemos crear multiples caminos u opciones en nuestro programa.
Si tenemos una condicion verdadera se ejecutara una sentencia, si tenemos una condicion false se ejecutara otra sentencia totalmente distinta.
> [!WARNING] 
> OBSERVACION: la ejecucion condicional rompe el flujo normal de un programa.
> 
- bucles (for): 
  
El bucle for se usa cuando conocemos de antemano la cantidad exacta de repeticiones.

Sintaxis general (Python como ejemplo):
for variable in rango:
    # instrucciones

- bucles (while):
  
  El bucle while se usa cuando no sabemos exactamente cuántas veces se repetirá, pero queremos que siga mientras una condición sea verdadera.

Sintaxis general:
while condición:
    # instrucciones
  
> SENTENCIAS: es una linea de codigo que hace una sola cosa. Para diferenciar una sentencia al terminar una linea de codigo se termina con un ";".La sentencia esta conformada por valores, variables, funciones, etc.
## 5. Funciones
las funciones en java script son bloques de codigo que se ejecutan de manera independiente,podemos decir tambiem que son mini programas que toman datos como entra retornan otros datos como salida.
las funciones son fundamentales para el correcto ordenamiento de nuestro codigo ademas que nos permiten separa de una manera mas ordenada  nuestra logica y evitar repetir el codigo muchas veces.
existen tres tipos de funciones
![alt text](image.png)
![alt text](image.png)
### Tipos de funciones
#### 1. funciones de declaracion
esa tipo de funcion es la mas conocida y la mas usada y su estructura es la siguiente:
#### 2. funciones por expresion

Una función por expresión es aquella que se asigna a una variable o constante.En lugar de declararla directamente con function nombre() {}, se guarda dentro de una variable como valor.

Esto significa que la función se crea en el momento de la ejecución y solo se puede usar después de la línea donde está definida (no tiene hoisting como las funciones declaradas).

- Sintaxis:
const saludar = function(nombre) {
  return "Hola " + nombre;
};
#### 3. funciones flecha arrow (function)

Las funciones flecha son una forma más corta y moderna de escribir funciones introducida en ES6 (ECMAScript 2015).
Usan la sintaxis ()=>{} en lugar de function.

- Sintaxis:
const funcionFlecha = (param1, param2) => {
  // cuerpo de la función
  return param1 + param2;
};

## 6. metodos para trabajar con datos estructurados

los metodos son funciones que dan funcionalidades extras a los tipos de datos en los cuales se aplica,
un metodo es antecesido por un ipo de dato y un punto
**Ejemplo**
el eemplo mas claro de un metodo es el `.length` - este  metodo nos permite o nos retorna la cantidad de caracteres de un string o la cantidad de ele,ementos de una lista
```js

"hola" . length //4
[2,5,4,6,7].length//5
```
> [!TIP]
los elementos en su mayoria solo se aplican a tipo de datos string, listas y objetos,en su gran parte solo aplicados para listas.

### 6.1. metodos para string - cadenas de texto

#### length

devuelve la longitud de una cadena
```js
let mensaje="hola como estan"
console.log(mensaje.length)
//retorna ->15
```
#### toLowerCase
devuelve una cadena en minusculas
```js
let mensaje="HOLA"
console.log(texto.toLowerCase())
//retorna ->hola
```
#### toUpperCase
devuelve una cadena en mayusculas
```js
let mensaje="hola"
console.log(texto.toUpperCase())
//retorna ->HOLA
```
#### concat
combina el texto de dos o mas cadenas
```js
let nombre="Kcapa"
let nombre="hola"
// let concatenado=saludo+nombre
console.log(saludo.concat(nombre))

let cad1="oh"
let cad2="me"
let cad3="vengo"
console.log(cad1.concat(cad2,cad3))
// retorna ->o me vengo
```

#### trim
Este metodo elimina los espacios que existen al inicio o  al final de una cadena o texto.

```js
let texto="    hola"
let nuevoTexto=texto.trim()//hola
let otro texto="hola    "
let nuevoOtroTexto=otroTexto.Trim()//hola
```
#### slice - corte
Este metodo nos permite extraer partes de una cadena , especificando sus indices,donde comenzar y hasta donde mostrar. o que parrafos quiere que te muestre
```js
let parrafo=" hola soy percy"
// solo quiero que me muestre percy
parrafo.slice(9)// mostrara percy
parrafo.slice(5,8)// mostrara soy

```
#### split - divide
 este metodo retorna una lisa basandose en un separador que se le indique
 ```js
 let parrafo=" solo se que nada se"
 parrafo.split("")//["solo","se","que","nada","se"]
 let Url="google.com/search?=gatitos"
 let gatito=url.split("=")//["google.com/search?","gatitos"]
 console.log(gatito[1])//gatitos
 let listaFrutas="manzana,tomate,pera,naranja"
 listaFrutas,split(",")
 ```




### 6.2. metodos para listas - arrays
#### Crear una lista
```js
let lista=[]
```
#### Agreagando elementos a unalista

```js
let lista=[0]="manzna"
```
#### Agreagando elementos al final de una lista
elelemento `push` agrega elemento al final de una lista
```js
let lista=[]
lista.push("manzana")
```
#### unshift
el metodo `unshift`
agrega  elementos al inicio de una lista
```js
let amigos=['rony''lisbeth' 'jose']
amigos.unshift("ronaled")
```
#### Removiendo elementos de una lista
#### pop
el metodo `pop` al  al contrario  de push  extrae  el ultimo  elemento  de una lista el pop quita los elementos de lista.

#### shift
 el metodo`shift`al contrario de unshift extrae elprimer elemento de una lista.

#### Eliminando elementos de una lista
#### delete
elimina un elemento de una base a su indice
```js
let texto=["hola","como"," ","estas"]
delete texto[2]
```
#### splice
este metodo elimina el elemento en base a su indice y a la cantidad deelementos a eliminar
```js
let vocals=['a','e','e','i','o','u']
vocals.splice(2,1)
vocals
```
#### Combinando o uniendo listas (arrays)
#### concat
este metodo crea un nuevo array que contiene  los elementos del array original seguido por elemntos de uno o mas array proporcionados.
```js
let amigosPrimaria=['alfredi','luis','edgar']
let amigosSecundaria=['edison','remy','miguel']
let amigosSuperior=['josue','marlon','handy']
let friends=amigosPrimaria.concat(amigosSecundaria,amigosSuperior)
friends
```
#### funcion callback
son funciones que reciben como parametro  una funcion anonima dentro de ello el 
#### find 
te  lo busca y te devueleve y lo retorna

let amigos=['dara','jose','asly']
amigos.find(el=>{el=='dara'})
#### filter
devolver de forma mas rapida una lista

let numeros=[5,6,10,2,0,14,20,50,9,11]
let numerosMenores=numeros.filter(num=>num<11)
#### Metodos para iterar una lista
#### forEach
este metodo ejecuta una funcion anonima por cada elemento de un array agarra cadauno y lo ejecuta.
```js
const miFuncion=a=>{}
let numeros=[1,2,3,4,5,6]
numeros.forEach(n=>{console.log(n+1)})

```
#### map
este metodo ejecuta una funcion anonima por cada elemento de un array , generando una nueva lista.
```js
let number=[1,2,3,4,5,6]
let nuewNumber=numeros.map(n=>{return n+1})
console.log(nuewNumber)

```

#### Metodos para buscar elementos en una lista
#### includes
este metodo busca un valor en especifico  y devuelve un valor booleano e ncaso de encontrar el valor buscado retorna true caso contrario false.
```js
let vocales=['a','i','o','u']
let buscaE=vocales.includes('e')
//retorna  false
let buscaE=vocales.includes('a')
//retorna true

```
#### filter
este metodo se usa para encontrar elementos dentro de una lista que cunplan con cierta condicion.
```js
let listNumber=[10,11,3,20,5]
// obtener  en una lista los numeros mayores a 10
let mayorDiez=listNumber.filter(n=>{return n>10})
console.log(mayorDiez)

```
#### find
ete metodo se usa para encontrar el primer elemento que cumpla con cierta ,condicion , a diferencia del `filter`
solo retorna un elemento el que coincida con la condicion
```js
let lisNumeros=[10,11,3,20,5]
// devolver el numero mayor a 10
let menorDiez=ñisNumero.find(n=>{return n>10})
console.log(menorDiez)
// retorna 11 - el primer elemento que coincide con la condicion
```

### 6.3. metodos para objetos 
### creando un objeto
```js
// objeto o diccionario vacio
let objeto={}
```
### agregando elementos a un objeto
recuerden  que el elemento de un objeto esta conformado por `clave:valor`
```js
objeto["nombre"]="Ruth"
objeto["edad"]="18"
objeto["CUI"]="76004955"

```
### Actualizando elementos de nuestro objeto
para realizarlaactualizacion del valor de un elemento tenemos que acceder a travez desu clave y asignarle el nuevo valor
**observacion** la clave debe ser la misma a actualizar  de no existir creara una nueva .

```js
objeto["edad"]="20"

```
### Eliminando elementos de nuestro objeto
para eliminar un elemento de un objeto hacemos uso de un operador unario `delete`
```js
delete objeto.CUI

```
### 7.es6

### DOM
(document object Model)
modelo de objetos del documento
DOM:es una API del navegador que se comunica con el servidor y permite que el cliente se comunica con el navegador.