// Inicializar variables
var area, peri, coorx, coory;
// Solicitar el valor para el radio del círculo
var radio = parseInt(prompt('Ingrese un número para el radio del círculo:', ''));
if (!isNaN(radio) && radio > 0) {
// Recorrer propiedades del objeto Math usando la instrucción with
with (Math) {
// Área de un círculo de radio "radio"
area = PI * radio * radio;
// Valor del lado horizontal definido por el radio
coorx = abs(radio * cos(PI / 4));
// Valor del lado vertical definido por el radio
coory = abs(radio * sin(PI / 4));
// Perímetros del círculo y del rectángulo
var pericir = 2 * PI * radio;
var perirec = 2 * coorx + 2 * coory;
// Mostrar resultados en el elemento con id "resultados"
document.getElementById("resultados").innerHTML = `
<strong>Resultados:</strong><br>
El área es: ${area.toFixed(2)}<br>
El lado x del rectángulo generado es: ${coorx.toFixed(2)}<br>
El lado y del rectángulo generado es: ${coory.toFixed(2)}<br>
El perímetro del círculo es: ${pericir.toFixed(2)}<br>
El perímetro del rectángulo es: ${perirec.toFixed(2)}
`;
}
} else {
document.getElementById("resultados").innerHTML = "<strong>Por favor, ingrese un número válido para el radio.</strong>";
}