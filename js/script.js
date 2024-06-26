'use strict';

document.addEventListener('DOMContentLoaded', function(){
    let botones = [
        "btn-algoritmos",
        "btn-arquitectura",
        "btn-sis-organizaciones",
        "btn-cs-tec-sociedad",
        "btn-practicas-profesionalizantes1",
        "btn-algebra",
        "btn-matematica1",
        "btn-ingles1",
        "btn-algoritmos2",
        "btn-sistop",
        "btn-basedatos",
        "btn-ing-software1",
        "btn-practicas-profesionalizantes2",
        "btn-estadistica",
        "btn-matematica2",
        "btn-ingles2",
        "btn-algoritmos3",
        "btn-redes-comunic",
        "btn-sem-actualizacion",
        "btn-ing-software2",
        "btn-practicas-profesionalizantes3",
        "btn-ingles3",
        "btn-asp-legales"
    ];

    let ventanas = [
        "alg1",
        "arquitectura",
        "syo",
        "ctys",
        "pp1",
        "algebra",
        "am1",
        "ing1",
        "alg2",
        "so",
        "bd",
        "ingsoft1",
        "pp2",
        "estadistica",
        "am2",
        "ing2",
        "alg3",
        "ryc",
        "sda",
        "ingsoft2",
        "pp3",
        "ing3",
        "alp"
    ];

    for (let i = 0; i < botones.length; i++) {
        document.getElementById(botones[i]).addEventListener("click", function() {
            mostrarDescripcion(i);
        });
    }

    for (let i = 0; i < botones.length; i++) {
        document.getElementById(botones[i]).addEventListener("click", function() {
            mostrarDescripcion(i);
        });
    }


    document.querySelector(".cerrar").addEventListener("click", cerrarVentanas);

    function mostrarDescripcion(indice) {
        let ventana = document.getElementById(ventanas[indice]);
        ventana.classList.remove("invisible");
        ventana.classList.add("ventanas-flotantes");
    }

    function cerrarVentanas() {
        for (let i = 0; i < ventanas.length; i++) {
            const ventana = document.getElementById(ventanas[i]);
            ventana.classList.remove("ventanas-flotantes");
            ventana.classList.add("invisible");
        }
    }
    
})