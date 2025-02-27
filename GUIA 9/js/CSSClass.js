// Función para agregar clase al h1
function agregarClase(clase) {
    const h1 = document.getElementById('head');
    // Añadir la clase si no está ya en el h1
    if (!h1.classList.contains(clase)) {
    h1.classList.add(clase);
    }
}
// Función para eliminar clase del h1
function eliminarClase(clase) {
const h1 = document.getElementById('head');
// Eliminar la clase si está presente
if (h1.classList.contains(clase)) {
h1.classList.remove(clase);
}
}
