// Variable para determinar si un año es bisiesto o no
var bisiesto = false;
// Registrar evento click al presionar el botón de envío
function iniciar() {
var btncalcular = document.getElementById("calcular");
var selmes = document.getElementById("selmes");
var txtano = document.getElementById("txtano");
btncalcular.addEventListener("click", function () {
const dia = document.frmFechaNac.seldia.value;
const mes = document.frmFechaNac.selmes.value;
const ano = document.frmFechaNac.txtano.value;
edad(dia, mes, ano);
});
selmes.addEventListener("change", function () {
const mes = document.frmFechaNac.selmes.value;
llenarDias(mes, document.frmFechaNac.seldia);
});
txtano.addEventListener("change", function () {
const mes = document.frmFechaNac.selmes.value;
llenarDias(mes, document.frmFechaNac.seldia);
});
}
// Función para determinar si un año es bisiesto o no
function esBisiesto(anno) {
return anno % 4 === 0 && (anno % 100 !== 0 || anno % 400 === 0);
}
// Función para limpiar el menú de selección Días
function quitarDias(menuDias) {
menuDias.innerHTML = '<option value="">Selecciona un día</option>';
}
// Función para llenar el menú de días
function llenarDias(mes, menuDias) {
const anno = document.frmFechaNac.txtano.value;
document.frmFechaNac.seldia.disabled = false;
quitarDias(menuDias);
let totalDias = 31;
if (mes === "Febrero") {
totalDias = esBisiesto(anno) ? 29 : 28;
} else if (["Abril", "Junio", "Septiembre", "Noviembre"].includes(mes)) {
totalDias = 30;
}
for (let i = 1; i <= totalDias; i++) {
    const option = new Option(i, i);
    menuDias.add(option);
    }
    }
    // Función para obtener la edad exacta de la persona
    function edad(dia, mes, annio) {
    if (!dia || !mes || !annio) {
    alert("Por favor, ingresa todos los datos.");
    return;
    }
    const mesesMap = {
    'Enero': 1, 'Febrero': 2, 'Marzo': 3, 'Abril': 4,
    'Mayo': 5, 'Junio': 6, 'Julio': 7, 'Agosto': 8,
    'Septiembre': 9, 'Octubre': 10, 'Noviembre': 11, 'Diciembre': 12
    };
    let tusdias, tusmeses, tusannios;
    const fecActual = new Date();
    let year = fecActual.getFullYear();
    let month = fecActual.getMonth() + 1;
    const day = fecActual.getDate();
    mes = mesesMap[mes];
    tusdias = day - dia;
    if (tusdias < 0) {
    tusdias += new Date(year, month - 1, 0).getDate();
    month--;
    }
    tusmeses = month - mes;
    if (tusmeses < 0) {
    tusmeses += 12;
    year--;
    }
    tusannios = year - annio;
    alert(`Tu edad exacta es:\n${tusannios} años,\n${tusmeses} meses, y\n${tusdias} días.`);
    }
    // Iniciar al cargar la página
    window.addEventListener("load", iniciar);
    