// Datos de Navegadores
const bChart = {
    name: "Uso anual de Navegadores",
    years: ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015"],
    fieldnames: ["Firefox", "Chrome", "Internet Explorer", "Safari", "Opera"],
    fields: [
    [38.9, 31.9, 21.2, 12.4, 6.6, 5.1, 3, 2.8, 2.5, 1.8],
    [3.4, 6.5, 8.9, 13.3, 17.5, 22.1, 26.4, 35.8, 48.7, 24.5],
[51.4, 50.5, 48.9, 38.3, 31.2, 22.1, 16.4, 11.8, 10.7, 4.1],
[2.6, 3.1, 2.9, 3.3, 3.2, 2.4, 2.1, 1.8, 1.3, 0.75],
[0.6, 1.1, 1.9, 2.3, 3.1, 2.7, 1.6, 1.8, 1.5, 0.3],
]
};
// Datos de Sistemas Operativos
const jsChart = {
name: "Uso anual de Sistemas Operativos",
years: ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015"],
fieldnames: ["Windows", "MAC-OS", "Linux", "Otros"],
fields: [
[63.4, 66.5, 78.4, 80.2, 88.1, 89.1, 94, 89.6, 95.8, 48.25],
[10.2, 8.5, 7.4, 8.2, 6.1, 7.3, 5.6, 7.6, 8.8, 9.5],
[5.8, 6.9, 8.1, 8.2, 7.6, 10.4, 9.1, 10.5, 12.4, 6.2],
[3.2, 4.1, 3.5, 3.8, 4.6, 5.2, 3.8, 3.2, 4.8, 1.75],
]
};
const ctx = document.getElementById('chartCanvas').getContext('2d');
let chart;
// Función para crear o actualizar el gráfico
const updateChart = () => {
const chartType = document.getElementById('chartTypeSelector').value;
const orientation = document.getElementById('orientationSelector').value;
const color = document.getElementById('colorSelector').value;
const data = chartType === "bChart" ? bChart : jsChart;
if (chart) {
chart.destroy(); // Destruir gráfica existente
}
document.getElementById('chartTitle').innerText = data.name;
chart = new Chart(ctx, {
type: orientation === 'horizontalBar' ? 'bar' : 'bar', // Vertical u horizontal
data: {
labels: data.years,
datasets: data.fieldnames.map((field, index) => ({
label: field,
data: data.fields[index],
backgroundColor: color,
}))
},
options: {
indexAxis: orientation === 'horizontalBar' ? 'y' : 'x', // Cambiar el eje
responsive: true,
plugins: {
legend: { position: 'top' },
title: { display: true, text: data.name }
},
scales: {
y: { beginAtZero: true },
x: { beginAtZero: true }
}
}
});
};
// Evento de actualización
document.getElementById('updateButton').addEventListener('click', updateChart);
// Crear gráfico inicial
updateChart();