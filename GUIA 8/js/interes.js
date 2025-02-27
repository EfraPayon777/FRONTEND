class InteresCompuesto {
    constructor(montoInicial, tasaInteres, tiempo) {
        this.montoInicial = montoInicial;
        this.tasaInteres = tasaInteres / 100;  // Convertimos el porcentaje a decimal
        this.tiempo = tiempo;
    }

    calcularInteres() {
        // Fórmula del interés compuesto: A = P (1 + r/n)^(nt)
        let montoFinal = this.montoInicial * Math.pow(1 + this.tasaInteres, this.tiempo);
        return montoFinal;
    }

    mostrarResultado() {
        let montoFinal = this.calcularInteres();
        let interesGenerado = montoFinal - this.montoInicial;

        // Mostrar el resultado en la página web
        document.getElementById('resultado').innerHTML = `
            Monto Final: $${montoFinal.toFixed(2)}<br>
            Intereses Generados: $${interesGenerado.toFixed(2)}
        `;
    }
}

// Función que se ejecuta cuando el usuario hace clic en el botón "Calcular"
function calcular() {
    // Obtener los valores del formulario
    let montoInicial = parseFloat(document.getElementById('montoInicial').value);
    let tasaInteres = parseFloat(document.getElementById('tasaInteres').value);
    let tiempo = parseInt(document.getElementById('tiempo').value);

    // Crear una instancia de la clase InteresCompuesto
    let interesCompuesto = new InteresCompuesto(montoInicial, tasaInteres, tiempo);

    // Llamar al método para mostrar el resultado
    interesCompuesto.mostrarResultado();
}
