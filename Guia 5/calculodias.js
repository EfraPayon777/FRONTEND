document.getElementById("calcularBtn").addEventListener("click", function() {
    var mes = prompt("Ingrese el mes:", "");
    var year = parseInt(prompt("Ingrese el año:", ""));
    var diasdelmes;
    var bisiesto = false;
    // Verificar si el año es bisiesto
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    bisiesto = true;
    }
    // Determinar el número de días según el mes ingresado
    switch (mes.toLowerCase()) {
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
    diasdelmes = 31;
    break;
    case "abril":
    case "junio":
    case "septiembre":
    case "noviembre":
    diasdelmes = 30;
    break;
    case "febrero":
    diasdelmes = bisiesto ? 29 : 28;
    break;
    default:
    alert("El mes " + mes + " no existe");
    mes = "No existe";
    diasdelmes = 0;
    }
    // Crear el mensaje para mostrar el resultado
    var msg;
    if (bisiesto) {
    msg = "El año " + year + " es bisiesto.<br />El mes de " + mes + " tiene " + diasdelmes + " días.";
} else {
    msg = "El año " + year + " no es bisiesto.<br />El mes de " + mes + " tiene " + diasdelmes + " días.";
    }
    // Mostrar el mensaje en el div 'info'
    document.getElementById('info').innerHTML = '<h3>' + msg + '</h3>';
    });