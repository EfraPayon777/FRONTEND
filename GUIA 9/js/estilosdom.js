// Funciones de JavaScript
function init() {
    var btnenabled = document.getElementById("enabled");
    var btndisabled = document.getElementById("disabled");
    var btnchange = document.getElementById("change");
    var btnremove = document.getElementById("remove");
    var btnadd = document.getElementById("add");
    // Habilitar estilos
    btnenabled.addEventListener("click", function() {
    document.styleSheets[0].disabled = false;
    });
    // Deshabilitar estilos
    btndisabled.addEventListener("click", function() {
    document.styleSheets[0].disabled = true;
    });
    // Modificar estilo directamente
    btnchange.addEventListener("click", modifyStyle);
    // Borrar estilo
    btnremove.addEventListener("click", removeStyle);
    // Añadir estilo
    btnadd.addEventListener("click", addStyle);
    }
    // Función para modificar el estilo
    function modifyStyle() {
    var h3Element = document.querySelector("h3");
    h3Element.style.color = 'purple';
h3Element.style.fontSize = '30pt';
h3Element.style.backgroundColor = 'gold';
}
// Función para eliminar el estilo
function removeStyle() {
var h3Element = document.querySelector("h3");
h3Element.removeAttribute("style");
}
// Función para añadir un nuevo estilo
function addStyle() {
var h3Element = document.querySelector("h3");
h3Element.style.textAlign = "center";
h3Element.style.fontFamily = "Century Gothic";
h3Element.style.fontSize = "18pt";
h3Element.style.color = "brown";
}
// Ejecutamos la función init cuando la página se haya cargado completamente
window.addEventListener("load", init);