// Se obtienen los números con prompt al cargar la página
//var op1 = parseFloat(prompt('Introduzca el primer número:', ''));
//var op2 = parseFloat(prompt('Introduzca el segundo número:', ''));
// Mostrar resultado inicial
var resultado = document.getElementById('resultado');
// Capturar el evento `click` para todos los botones dentro de `#operaciones`
document.getElementById('operaciones').onclick = function(event) {
var operacion = event.target.getAttribute('data-op');
if (operacion) { // Verifica que el botón tenga el atributo `data-op`
switch (operacion) {
case 'sumar':
var op1 = parseFloat(prompt('Introduzca el primer número:', ''));
var op2 = parseFloat(prompt('Introduzca el segundo número:', ''));
resultado.innerHTML = "<p class='letterpress'>" + op1 + " + " + op2 + " = " + (op1 + op2) + "</p>";
break;
case 'restar':
var op1 = parseFloat(prompt('Introduzca el primer número:', ''));
var op2 = parseFloat(prompt('Introduzca el segundo número:', ''));
resultado.innerHTML = "<p class='letterpress'>" + op1 + " - " + op2 + " = " + (op1 - op2) + "</p>";
break;
case 'multiplicar':
var op1 = parseFloat(prompt('Introduzca el primer número:', ''));
var op2 = parseFloat(prompt('Introduzca el segundo número:', ''));
resultado.innerHTML = "<p class='letterpress'>" + op1 + " * " + op2 + " = " + (op1 * op2) + "</p>";
break;
case 'dividir':
    var op1 = parseFloat(prompt('Introduzca el primer número:', ''));
    var op2 = parseFloat(prompt('Introduzca el segundo número:', ''));
    if (op2 === 0) {
        resultado.innerHTML = "<p class='letterpress'>No se puede dividir entre cero</p>";
        } else {
        resultado.innerHTML = "<p class='letterpress'>" + op1 + " / " + op2 + " = " + (Math.round((op1 / op2) 
        * 100) / 100) + "</p>";
        }
        break;
        }
        }
};
        