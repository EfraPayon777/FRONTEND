// Obtener el ícono de menú y el contenedor del menú
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
// Agregar evento de clic para alternar la visibilidad del menú
menuToggle.addEventListener("click", function() {
// Alternar la visibilidad del menú
if (menu.style.display === "block") {
menu.style.display = "none";
} else {
menu.style.display = "block";
}
});