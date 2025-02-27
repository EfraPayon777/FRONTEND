// Mostrar la tecla presionada. En una aplicación real no debería hacerlo.
// Probablemente sería buena idea mostrar únicamente en el caso que 
// se ingresen teclas que no sean números. 
function showChar(e) {
    var code = e.keyCode || e.which;
    var character = String.fromCharCode(code);
    console.log('La tecla presionada fue: ' + character); // Mostrar en consola
    }
    function numbersOnly(event) {
    var key = event.keyCode || event.which;
    var keychar = String.fromCharCode(key);
    // Mostrar la tecla presionada
    showChar(event);
    // Comprobar caracteres especiales (backspace, tab, enter, escape)
    if ((key === 8) || (key === 9) || (key === 13) || (key === 27)) {
    document.getElementById("statusMessage").textContent = "";
    return true;
    }
    // Permitir solo números
    if ("0123456789".indexOf(keychar) > -1) {
    document.getElementById("statusMessage").textContent = "";
    return true;
    } else {
    document.getElementById("statusMessage").textContent = "Este campo solo acepta números";
    return false;
    }
    }