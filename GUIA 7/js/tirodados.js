//Todo el módulo se encuentra dentro de una función
//conocida como función inmediata, en este caso
//también anónima que provoca que todo se ejecute
//de una vez.
(function(){
    if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
    }
    else{
    window.attachEvent("onload", iniciar);
    }
    var dado1, dado2, dado3, dado4, dado5, dado6;
    function iniciar(){
    var boton = document.getElementById("botonTirar");
    if(boton.addEventListener){
    boton.addEventListener("click", tirarDados, false);
    }
    else{
    boton.attachEvent("onclick", tirarDados);
    }
    dado1 = document.getElementById("dado1");
    dado2 = document.getElementById("dado2");
    dado3 = document.getElementById("dado3");
    dado4 = document.getElementById("dado4");
    dado5 = document.getElementById("dado5");
    dado6 = document.getElementById("dado6");
    }
    function tirarDados(){
    asignarNumero(dado1);
    asignarNumero(dado2);
    asignarNumero(dado3);
    asignarNumero(dado4);
    asignarNumero(dado5);
    asignarNumero(dado6);
    }
    function asignarNumero(dado){
    var valorDado = Math.floor(1 + Math.random() * 6);
    dado.src = "img/dice" + valorDado + ".png";
    dado.alt = "Imagen del dado con el valor " + valorDado;
    }
    })();