'use strict';
let BotonCalcular = document.queryselector ('#btnCalcular');

BotonCalcular.addEventListener('click', leerDatos);

function leerDatos(){
    let nEnfermedad= 0;
    let nEdad= 0;
    let nDias= 0;
    let nCosto =0;

    nEnfermedad = Number (document.queryselector('#txtEnfermedad').value);
    nEdad = Number (document.querySelector('#txtEdad').value);
    nDias = Number (document.querySelector('#txtDias').value);

    nCosto = calcularCosto (nEnfermedad, nEdad, nDias);

    document.querySelector ('#txtCosto').value = nCosto;
};

