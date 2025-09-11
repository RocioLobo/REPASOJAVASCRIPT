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
devuelve una cadena en mayusculas```js
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









### 6.2. metodos para listas - arrays

### acceder
### modifica
### crear
### insertar
### eliminar
### ordenar
### DOM
### 6.3. metodos para objetos 
