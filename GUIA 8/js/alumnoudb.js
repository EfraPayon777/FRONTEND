// Registrar evento click al presionar el botón de envío
function iniciar() {
    var btnenviar = document.getElementById("btnSend");
    // Al producirse un click sobre el botón de envío
    // invocar los métodos del objeto carro que mostrarán
    // los valores ingresados en el formulario
    if (btnenviar.addEventListener) {
    btnenviar.addEventListener("click", function () {
    var chkvalue, selvalue, nuevoalumno;
    var radiofield = document.frmmat.elements["chkgender"];
    for (var i = 0; i < radiofield.length; i++) {
    if (radiofield[i].checked) {
        chkvalue = radiofield[i].value;
    }
    }
    selvalue = document.frmmat.seldegree.options[frmmat.seldegree.selectedIndex].value;
    nuevoalumno = new alumnoUDB(document.frmmat.txtname.value, document.frmmat.txtlastname.value, 
    document.frmmat.txtage.value, chkvalue, selvalue);
    nuevoalumno.matricular();
    nuevoalumno.imprimir();
    }, false);
    }
    else {
    btnenviar.attachEvent("onclick", function () {
    var chkvalue, nuevoalumno;
    var radiofield = document.frmmat.elements["chkgender"];
    for (var i = 0; i < radiofield.length; i++) {
    if (radiofield[i].checked) {
    chkvalue = radiofield[i].value;
    }
    }
    selvalue = document.frmmat.seldegree.options[frmmat.seldegree.selectedIndex].value;
    nuevoalumno = new alumnoUDB(document.frmmat.txtname.value, document.frmmat.txtlastname.value, 
    document.frmmat.txtage.value, chkvalue, selvalue);
    nuevoalumno.matricular();
    nuevoalumno.imprimir();
    });
    }
    }
    // Definiendo la clase alumnoUDB haciendo uso de sintaxis de función
    function alumnoUDB(nombre, apellido, edad, genero, carrera) {
    // Propiedades de la clase
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
    this.carrera = carrera;
    this.numCarnet = null;
    // Métodos de la clase
    this.matricular = function () {
    var fecha = new Date();
    var year = fecha.getFullYear();
    var day = fecha.getDate();
    var sec = fecha.getSeconds();
    this.numCarnet = this.nombre.substring(0, 1) + this.apellido.substring(0, 1) + this.formato(sec) + this.formato(day) + year;
    }
    this.imprimir = function () {
    // Generar contenido HTML con Bootstrap
    document.write("<!DOCTYPE html>\n");
    document.write("<html lang=\"es\">\n");
    document.write("<head>\n\t");
    document.write("<title>Alumno matriculado</title>\n");
    document.write("<meta charset=\"utf-8\" />");
    document.write("<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css\" rel=\"stylesheet\" />\n");
    document.write("</head>\n");
    document.write("<body class=\"container mt-5\">\n");
    document.write("<h3 class=\"mb-4\">Datos del Alumno</h3>");
    document.write("<table class=\"table table-bordered\">\n");
    document.write("<tr><th>Carnet</th><td>" + this.numCarnet + "</td></tr>\n");
    document.write("<tr><th>Nombre</th><td>" + this.nombre + " " + this.apellido + "</td></tr>\n");
    document.write("<tr><th>Edad</th><td>" + this.edad + "</td></tr>\n");
    document.write("<tr><th>Género</th><td>" + this.genero + "</td></tr>\n");
    document.write("<tr><th>Carrera</th><td>" + this.carrera + "</td></tr>\n");
    document.write("</table>\n");
    document.write("<a href=\"javascript:window.history.back();\" class=\"btn btn-secondary\">Volver</a>\n");
    document.write("</body>\n");
    document.write("</html>\n");
}
this.formato = function (valor) {
if (valor < 10) valor = "0" + valor;
return valor;
}
}
// Asociando función que manejará el evento load al cargar la página
if (window.addEventListener) {
window.addEventListener("load", iniciar, false);
}
else if (window.attachEvent) {
window.attachEvent("onload", iniciar);
}