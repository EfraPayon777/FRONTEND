function calcularPromedio() {
    // Declaración de las variables a utilizar
    var i, num, nota = 0, notaactual, promedio;
    var resultado = document.getElementById("resultado");
    // Captura de la cantidad de notas que se ingresarán
    num = parseInt(prompt("¿Cuántas notas va a ingresar?", ""));
    // Validar si el número de notas es válido
    if (isNaN(num) || num <= 0) {
    resultado.innerHTML = "<h3 class='text-danger'>Por favor ingrese un número válido de notas.</h3>";
    return;
    }
    // Ciclo para ingresar cada nota
    for (i = 1; i <= num; i++) {
    notaactual = parseFloat(prompt("Ingrese la nota " + i + ": ", ""));
    // Validar si la nota ingresada es un número
    if (isNaN(notaactual)) {
    resultado.innerHTML += "<h3 class='text-danger'>Nota inválida ingresada en la posición " + i + ". Se omitirá.</h3>";
    continue;
    }
    resultado.innerHTML += "<h3 class='text-secondary'>La nota " + i + ": " + (Math.round(notaactual * 100) / 100) + "</h3>";
    nota += notaactual;
    }
    // Cálculo del promedio
    promedio = nota / num;
    // Imprimir el promedio redondeado a dos decimales
    resultado.innerHTML += "<h3 class='text-success'>El promedio de las notas es: " + (Math.round(promedio * 100) / 100) + "</h3>";
    }
    