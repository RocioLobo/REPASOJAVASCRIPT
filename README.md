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
- bucles (for): tarea con sus ejemplos y hace sus ejercicios en su carpetita



- bucles (while):tarea con sus ejemplos
  
> SENTENCIAS: es una linea de codigo que hace una sola cosa. Para diferenciar una sentencia al terminar una linea de codigo se termina con un ";".La sentencia esta conformada por valores, variables, funciones, etc.
## 5. Funciones
las funciones en java script son bloques de codigo que se ejecutan de manera independiente,podemos decir tambiem que son mini programas que toman datos como entra retornan otros datos como salida.
las funciones son fundamentales para el correcto ordenamiento de nuestro codigo ademas que nos permiten separa de una manera mas ordenada  nuestra logica y evitar repetir el codigo muchas veces.
existen tres tipos de funciones
### Tipos de funciones
#### 1. funciones de declaracion
esa tipo de funcion es la mas conocida y la mas usada y su estructura es la siguiente:


## 6. metodos para trabajar con datos estructurados
### acceder
### modifica
### crear
### insertar
### eliminar
### ordenar
### DOM