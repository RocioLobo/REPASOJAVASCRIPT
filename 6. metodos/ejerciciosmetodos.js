let datosAlumno={
    "nombre":"antonio",
    "Apellido":"panpañahui"

}
// agregar edad y sexo
datosAlumno["edad"]=20
datosAlumno["sexo"]="M"


// actualizar el apellido
datosAlumno["apellido"]="otro apellido"

// eliminar sexo
delete datosAlumno.sexo
datosAlumno
console.log(datosAlumno)

let alumnos=[
    {"nombre":"ruth","edad":19,"CUI":23445876},
    {"nombre":"flor","edad":18,"CUI":23567890},
    {"nombre":"asly","edad":19,"CUI":95823567},

]

// de mi lista deseo mostrar a  la persona que tenga  como CUI 23445876
let buscaCui=alumnos.find(el=>el.CUI == 23445876)
console.log(buscaCui)


//deseo mostrar una listasolo  de menores a 19
let listaMenores=alumnos.filter(al=>al.edad<19)
console.log(listaMenores)

// actualizar la lista de objetos y agregarle el genero femenino a todos
let listaActualizada=alumnos.map(el=>{
     el["genero"]="femenino"
     return el
})
    console.log(listaActualizada)


