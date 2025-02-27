// Declaración de variables
var voto;
var opcion = true;
var cont1 = cont2 = cont3 = 0; 
var total;
var per1, per2, per3;
// Ciclo repetitivo donde se captura voto por voto
while(opcion == true) {
voto = parseInt(prompt('¿Cuál es su voto?', '')); 
switch (voto) {
case 1:
cont1++;
break;
case 2:
cont2++;
break;
case 3:
cont3++;
break;
default: 
alert('¡Voto no válido!');
}
opcion = confirm('¿Desea continuar s/n?'); 
}
// Obtener el total de respuestas de la encuesta
total = cont1 + cont2 + cont3;
// Calcular los porcentajes
per1 = Math.round((cont1 / total) * 100);
per2 = Math.round((cont2 / total) * 100);
per3 = Math.round((cont3 / total) * 100);
// Mostrar los resultados de la encuesta en una tabla con Bootstrap
document.getElementById('resultado').innerHTML = `
<table class="table table-bordered table-striped">
<thead class="thead-dark">
<tr>
<th>Resultado de los votos</th>
<th>Votos obtenidos</th>
<th>Porcentaje</th>
</tr>
</thead>
<tbody>
<tr>
<td>Votos a favor</td>
<td class="text-right">${cont1}</td>
<td class="text-right">${per1} %</td>
</tr>
<tr>
<td>Votos en contra</td>
<td class="text-right">${cont2}</td>
<td class="text-right">${per2} %</td>
</tr>
<tr>
<td>Se abstienen de opinar</td>
<td class="text-right">${cont3}</td>
<td class="text-right">${per3} %</td>
</tr>
</tbody>
<tfoot>
<tr>
<th>Totales</th>
<th class="text-right">${total}</th>
<th class="text-right">${(per1 + per2 + per3)} %</th>
</tr>
</tfoot>
</table>
`;
