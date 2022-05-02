// guardar el estado (columna activa)
let columnaActiva = 1

//seleccionar las columnas
const columnas = document.querySelectorAll(".columna")

//mostrando por consola al hacer click en la columna

columnas.forEach((columna, indice) => {
    columna.addEventListener("click", function () {
        cambiarColumna(indice)
    })
})

//cambiar el estado de las columnas
function cambiarColumna(indice){
    columnas[columnaActiva].classList.remove("activa")
    columnas[indice].classList.add("activa")
    columnaActiva = indice
}