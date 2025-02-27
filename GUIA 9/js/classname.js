document.addEventListener('DOMContentLoaded', function() {
    // Obtener los botones y los elementos de clase
    const addButton = document.getElementById('add');
    const removeButton = document.getElementById('remove');
    const classesSelect = document.frmclass.classes;
    const heading = document.getElementById('head'); // Elemento h1
    // Función para agregar la clase seleccionada
    addButton.addEventListener('click', function() {
    const selectedClass = classesSelect.value;
    if (selectedClass) {
    agregarClase(selectedClass);
    }
    });
    // Función para eliminar la clase seleccionada
    removeButton.addEventListener('click', function() {
    const selectedClass = classesSelect.value;
    if (selectedClass) {
    eliminarClase(selectedClass);
    }
    });
    // Función para agregar la clase al h1
    function agregarClase(clase) {
    // Verificar si la clase ya está presente, para evitar duplicados
    if (!heading.classList.contains(clase)) {
    heading.classList.add(clase);
    }
    }
    // Función para eliminar la clase del h1
    function eliminarClase(clase) {
    // Verificar si la clase está presente y eliminarla
    if (heading.classList.contains(clase)) {
    heading.classList.remove(clase);
    }
    }
    });