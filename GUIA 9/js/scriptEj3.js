// Selección de elementos del DOM
const numberInput = document.getElementById('number-input');
const addNumberBtn = document.getElementById('add-number-btn');
const numberList = document.getElementById('number-list');
const generateChartBtn = document.getElementById('generate-chart-btn');
const barChart = document.getElementById('bar-chart');

// Función para validar si el valor ingresado es un número
function isValidNumber(value) {
    return !isNaN(value) && value.trim() !== '';
}

// Evento al presionar el botón "Agregar Número"
addNumberBtn.addEventListener('click', () => {
    const inputValue = numberInput.value; // Obtiene el valor del input

    if (isValidNumber(inputValue)) {
        // Crea un nuevo elemento de lista con el valor válido
        const listItem = document.createElement('li');
        listItem.textContent = inputValue;
        numberList.appendChild(listItem);

        // Limpia el campo de entrada después de agregar el número
        numberInput.value = '';
    } else {
        // Alerta si el valor no es un número válido
        alert('Por favor, ingrese un número válido.');
    }
});

// Evento al presionar el botón "Generar Gráfica"
generateChartBtn.addEventListener('click', () => {
    // Limpia cualquier gráfica anterior
    barChart.innerHTML = '';

    // Obtiene los valores del cuadro de lista
    const numbers = Array.from(numberList.children).map(item => Number(item.textContent));

    // Genera dinámicamente las barras de la gráfica
    numbers.forEach(number => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${number * 10}px`; // Escala de altura (10px por unidad)
        bar.textContent = number; // Etiqueta con el valor numérico
        barChart.appendChild(bar);
    });
});
