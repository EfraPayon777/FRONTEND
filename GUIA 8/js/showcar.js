//Registrar evento click al presionar botones de envío
//y evento change al cambiar de opción en el elemento select
function iniciar(){
    var select = document.getElementById("selfab");
    var button = document.getElementById("enviar");
    //Al producirse en evento change en el elemento select 
    //invocar a la función addOptions para volver a llenar
    //el select dependiente con los datos adecuados
    if(select.addEventListener){
        select.addEventListener("change", function(){
        addOptions(marcas[this.options[this.selectedIndex].text], document.frmcar.selmod);
        }, false);
        }
        else{
        select.attachEvent("onchange", function(){
        addOptions(marcas[this.options[this.selectedIndex].text], document.frmcar.selmod);
        });
        }
        //Al producirse un click sobre el botón de envío
        //invocar los métodos del objeto carro que mostrarán
        //los valores ingresados en el formulario
        if(button.addEventListener){
        button.addEventListener("click", function(){
        var seleccion = showRadioSelected(document.frmcar.radcolor);
        carro.pedido(document.frmcar.selfab.value, document.frmcar.selmod.value, seleccion, document.frmcar.txtanio.value); 
        carro.mostrar();
        }, false);
        }
        else{
        button.attachEvent("onclik", function(){
        var seleccion = showRadioSelected(document.frmcar.radcolor);
        carro.pedido(document.frmcar.selfab.value, document.frmcar.selmod.value, seleccion, document.frmcar.txtanio.value); 
        carro.mostrar();
        });
        }
        }
        //Inicializando matriz para manejar las marcas y sus respectivos modelos
        var marcas = new Array(7);
        marcas["Toyota"] = ["Corolla", "Echo", "Yaris", "Avensis", "Camry", "Land Cruiser", "4 Runner", "Hilux"];
        marcas["Nissan"] = ["Sentra", "Platina", "Almera", "Altima", "Tiida", "Pathfinder", "Patrol", "X-Trail", "Frontier"];
        marcas["Hyundai"] = ["Elantra", "Accent", "Coupé", "Santa Fe", "i30"];
        marcas["Volkswagen"] = ["Golf", "Jetta", "Passat", "Phaeton", "Thunder Bunny", "Touareg", "Saveiro"];
        marcas["Chevrolet"] = ["Optra", "Aveo", "Cobalt", "Malibu", "Corvette", "Chevy", "Avalanche", "Trailblazer"];
        marcas["Honda"] = ["Civic", "Acura", "Accord", "Fit", "Odyssey", "CR-V", "Pilot", "RidgeLine"];
        marcas["Mitsubishi"] = ["Lancer", "Galant", "Eclipse", "Montero", "Nativa", "Outlander", "L200"];
        //Creando el objeto carro con el constructor Object()
        var carro = new Object();
        //Propiedades del objeto
        carro.fabricante = "";
        carro.modelo = "";
        carro.color = "";
        carro.anio = "";
        //Métodos del objeto
        carro.pedido = function(fab, mod, col, an){
        carro.fabricante = fab;
        carro.modelo = mod;
        carro.color = col;
        carro.anio = an;
        }
        carro.mostrar = function() {
        document.write("<!DOCTYPE html>\n");
        document.write("<html lang=\"es\">\n");
        document.write("<head>\n\t");
        document.write("<title>Datos del carro</title>\n");
        document.write("<meta charset=\"utf-8\" />");
        document.write("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">");
document.write("<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\" />\n");
document.write("</head>\n");
document.write("<body class=\"d-flex justify-content-center align-items-center vh-100\">\n");
// Contenedor de Bootstrap centrado
document.write("<div class=\"container\">\n");
document.write("<div class=\"row justify-content-center\">\n");
document.write("<div class=\"col-md-6\">\n");
// Tabla de detalles del carro con estilos de Bootstrap
document.write("<table class=\"table table-bordered table-striped\">\n");
document.write("<thead class=\"thead-dark\">\n");
document.write("<tr><th colspan=\"2\" class=\"text-center\">Datos del carro</th></tr>\n");
document.write("</thead>\n");
document.write("<tbody>\n");
document.write("<tr><td><strong>Fabricante:</strong></td><td>" + carro.fabricante + "</td></tr>\n");
document.write("<tr><td><strong>Modelo:</strong></td><td>" + carro.modelo + "</td></tr>\n");
document.write("<tr><td><strong>Color:</strong></td><td>" + carro.color + "</td></tr>\n");
document.write("<tr><td><strong>Año:</strong></td><td>" + carro.anio + "</td></tr>\n");
document.write("</tbody>\n");
document.write("</table>\n");
document.write("</div>\n</div>\n</div>\n");
document.write("<script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\"></script>");
document.write("<script src=\"https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js\"></script>");
document.write("<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js\"></script>");
document.write("</body>\n</html>");
};
function showRadioSelected(radiogroup){
var seleccionado;
var numradios = radiogroup.length;
for(var i=0; i<numradios; i++){
if(radiogroup[i].checked){
seleccionado = radiogroup[i].value;
}
}
return seleccionado;
}
function removeOptions(optionMenu){
for(i=0; i<optionMenu.options.length; i++){
optionMenu.options[i] = null;
}
}
function addOptions(optionList, optionMenu){
var i=0;
removeOptions(optionMenu); //Limpia las opciones
for(i=0; i<optionList.length; i++){
optionMenu[i] = new Option(optionList[i], optionList[i]);
}
}
//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
    }
    else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
    }