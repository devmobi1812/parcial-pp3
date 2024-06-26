'use strict';

document.addEventListener('DOMContentLoaded', function(){
    let materias = document.querySelectorAll(".anio > button")
    
    materias.forEach(materia => materia.addEventListener("click", function(e){
        let nombreMateria = e.currentTarget.id.replace("btn-","");
        console.log(nombreMateria)
        mostrarDescripcion(nombreMateria);
    }))

    document.querySelector(".cerrar").addEventListener("click", cerrarVentanas);

    function mostrarDescripcion(nombreMateria) {
        let ventana = document.getElementById(nombreMateria);
        ventana.classList.remove("invisible");
        ventana.classList.add("ventanas-flotantes");
    }

    function cerrarVentanas() {
        let ventana = document.querySelector(".ventanas-flotantes");
        ventana.classList.remove("ventanas-flotantes");
        ventana.classList.add("invisible");
        
    }
    
})