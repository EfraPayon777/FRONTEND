function init() {
    var form = document.getElementById('form');
    form.onsubmit = function(event) {
    event.preventDefault(); // Evitar la recarga de la página
    createform(document.frmconf.selcontrol.value, document.frmconf.txtnum.value);
    }
    }
    function createform(control, numero) {
    var htmlform = "<div class=\"dynamic-form\">";
    htmlform += "<form name=\"miform\" class=\"form-group\">\n";
    htmlform += "<fieldset>\n";
    htmlform += "<legend><span class=\"badge badge-secondary\">1</span> Formulario dinámico</legend>";
    for (var i = 0; i < numero; i++) {
    var tag = "";
    switch (control) {
    case "text":
    case "password":
    tag = `<div class="form-group">
    <input type="${control}" name="${control}${i + 1}" class="form-control" required placeholder="Ingrese 
    los datos en el campo ${control}">
    </div>`;
    break;
    case "textarea":
    tag = `<div class="form-group">
    <textarea name="${control}${i + 1}" class="form-control" required placeholder="Ingrese los datos en el 
campo ${control}"></textarea>
</div>`;
break;
case "checkbox":
tag = `<div class="form-check">
<input type="checkbox" name="${control}${i + 1}" id="${control}${i + 1}" class="form-check-input">
<label for="${control}${i + 1}" class="form-check-label">${control}${i + 1}</label>
</div>`;
break;
case "radio":
tag = `<div class="form-check">
<input type="radio" name="${control}" id="${control}${i + 1}" class="form-check-input">
<label for="${control}${i + 1}" class="form-check-label">${control}${i + 1}</label>
</div>`;
break;
case "file":
tag = `<div class="custom-file mb-3">
<input type="file" class="custom-file-input" name="${control}${i + 1}" id="${control}${i + 1}">
<label class="custom-file-label" for="${control}${i + 1}">Seleccionar archivo</label>
</div>`;
break;
case "button":
tag = `<button name="${control}${i + 1}" class="btn btn-secondary mb-2">${control}${i + 1}</button>`;
break;
default:
alert("No ha seleccionado el tipo de control");
return;
}
htmlform += tag;
}
htmlform += "</fieldset>\n</form>\n</div>";
document.getElementById('view').innerHTML = htmlform;
}
window.onload = init;