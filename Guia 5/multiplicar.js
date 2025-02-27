// Ingresando el número y capturándolo usando el método prompt()
var numero = prompt('Ingrese un número entero entre 1 y 10 para obtener su tabla de multiplicar','');
// Validar que el número sea un valor entero entre 1 y 10
if (numero >= 1 && numero <= 10 && Number.isInteger(Number(numero))) {
// Crear la tabla
var tablaHTML = `
    <table class="table table-bordered table-striped">
        <caption class="text-center mb-4">Tabla del multiplicar del ${numero}</caption>
        <thead>
            <tr>
                <th>Operación</th>
                <th>Producto</th>
            </tr>
        </thead>
        <tbody>
`;
// Generar las filas de la tabla
for (var i = 1; i <= 10; i++) {
    tablaHTML += `
        <tr>
            <td>${numero} x ${i} = </td>
            <td>${numero * i}</td>
</tr>
`;
}
tablaHTML += `
        </tbody>
    </table>
`;
// Inyectar la tabla al contenedor
    document.getElementById('tabla-container').innerHTML = tablaHTML;
} else {
    alert("Por favor, ingrese un número válido entre 1 y 10.");
}