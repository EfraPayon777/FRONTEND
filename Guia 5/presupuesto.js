function init() {
    //prompt() permite obtener entrada de datos del usuario
    var presupuesto = prompt('Ingrese el presupuesto anual', '');
    var derma, trauma, pedi;
    var div = document.getElementById('distribucion');
    // Realizando los cálculos para distribución del presupuesto
    derma = presupuesto * 0.40;
    trauma = presupuesto * 0.35;
    pedi = presupuesto * 0.25;
    // Creando el código que se insertará dentro del elemento div id=distribucion
    var html = `
    <div class="row">
    <div class="col-md-4 mb-3">
    <div class="card">
    <div class="card-body">
    <h5 class="card-title">Dermatología</h5>
    <p class="card-text">El presupuesto asignado es: $${derma}</p>
    </div>
    </div>
    </div>
    <div class="col-md-4 mb-3">
    <div class="card">
    <div class="card-body">
    <h5 class="card-title">Traumatología</h5>
    <p class="card-text">El presupuesto asignado es: $${trauma}</p>
    </div>
    </div>
    </div>
    <div class="col-md-4 mb-3">
    <div class="card">
    <div class="card-body">
    <h5 class="card-title">Pediatría</h5>
    <p class="card-text">El presupuesto asignado es: $${pedi}</p>
    </div>
    </div>
    </div>
    </div>
    `;
    // Insertando dentro del elemento div el código asignado en la variable html
    div.innerHTML = html;
    }
    window.onload = init;