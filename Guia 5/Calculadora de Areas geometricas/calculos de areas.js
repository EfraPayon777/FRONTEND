var resultado = document.getElementById('resultado');

// Capturar el evento `click` para todos los botones dentro de `#operaciones`
document.getElementById('operaciones').onclick = function(event) {
    var operacion = event.target.getAttribute('data-op');
    if (operacion) { // Verifica que el botón tenga el atributo `data-op`
        switch (operacion) {
            case 'Circulo':
                var op1 = prompt('Introduzca el radio del círculo:', '');
                if (esValido(op1)) {
                    op1 = parseFloat(op1);
                    resultado.innerHTML = "<p class='letterpress'>" + 
                        "Su radio es " + op1 + ", entonces su área es: " + (3.1416 * (op1 * op1)) + "</p>";
                } else {
                    alert("Por favor, introduzca un valor positivo y numérico para el radio.");
                }
                break;
            case 'Triangulo':
                var op1 = prompt('Introduzca la base del triángulo:', '');
                var op2 = prompt('Introduzca la altura del triángulo:', '');
                if (esValido(op1) && esValido(op2)) {
                    op1 = parseFloat(op1);
                    op2 = parseFloat(op2);
                    resultado.innerHTML = "<p class='letterpress'>" + 
                        "Su base es " + op1 + " y su altura es " + op2 + 
                        ", como resultado su área es: " + ((op1 * op2) / 2) + "</p>";
                } else {
                    alert("Por favor, introduzca valores positivos y numéricos para la base y la altura.");
                }
                break;
            case 'Cuadrado':
                var op1 = prompt('Introduzca un lado del cuadrado:', '');
                if (esValido(op1)) {
                    op1 = parseFloat(op1);
                    resultado.innerHTML = "<p class='letterpress'>" + 
                        "El lado mide " + op1 + ", como resultado su área es: " + (op1 * op1) + "</p>";
                } else {
                    alert("Por favor, introduzca un valor positivo y numérico para el lado.");
                }
                break;
        }
    }
};

// Función para validar si el valor es numérico y positivo
function esValido(valor) {
    return !isNaN(valor) && parseFloat(valor) > 0;
}
