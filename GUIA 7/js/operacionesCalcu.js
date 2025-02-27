// Mostrar resultado inicial
var resultado = document.getElementById('resultado');

// Función para obtener números de manera segura
function obtenerNumero(mensaje) {
    let numero;
    do {
        numero = prompt(mensaje);
        if (numero === null) return null;  // En caso de que el usuario cancele el prompt
        numero = parseFloat(numero);
    } while (isNaN(numero));  // Repite si el número no es válido
    return numero;
}

// Función para realizar las operaciones y mostrar el resultado
function realizarOperacion(operacion) {
    var op1 = obtenerNumero('Introduzca el primer número:');
    if (op1 === null) return;

    var op2 = null;
    if (operacion !== 'inversa' && operacion !== 'cuadrado' && operacion !== 'raiz') {
        op2 = obtenerNumero('Introduzca el segundo número:');
        if (op2 === null) return;
    }

    let resultadoOperacion;
    switch (operacion) {
        case 'sumar':
            resultadoOperacion = op1 + op2;
            break;
        case 'restar':
            resultadoOperacion = op1 - op2;
            break;
        case 'multiplicar':
            resultadoOperacion = op1 * op2;
            break;
        case 'dividir':
            if (op2 === 0) {
                resultado.innerHTML = "<p class='letterpress'>No se puede dividir entre cero</p>";
                return;
            }
            resultadoOperacion = (Math.round((op1 / op2) * 100) / 100); // Redondear a dos decimales
            break;
        case 'residuo':
            resultadoOperacion = op1 % op2;
            break;
        case 'inversa':
            if (op1 === 0) {
                resultado.innerHTML = "<p class='letterpress'>La inversa de 0 no existe</p>";
                return;
            }
            resultadoOperacion = 1 / op1;
            break;
        case 'cuadrado':
            resultadoOperacion = Math.pow(op1, 2);
            break;
        case 'raiz':
            if (op1 < 0) {
                resultado.innerHTML = "<p class='letterpress'>No se puede calcular la raíz cuadrada de un número negativo</p>";
                return;
            }
            resultadoOperacion = Math.sqrt(op1);
            break;
        default:
            return;  // Si la operación no es válida, no hacer nada
    }

    // Mostrar el resultado en el HTML
    resultado.innerHTML = `<p class='letterpress'>${operacion === 'cuadrado' ? op1 : (op1 + ' ' + operacion + ' ' + op2)} = ${resultadoOperacion}</p>`;
}

// Capturar los eventos `click` de los botones dentro de `#operaciones`
document.getElementById('operaciones').addEventListener('click', function(event) {
    var operacion = event.target.getAttribute('data-op');
    if (operacion) {  // Verifica que el botón tenga el atributo `data-op`
        realizarOperacion(operacion);
    }
});
