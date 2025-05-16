document.getElementById("cotizacionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let destino = document.getElementById("destino").value;
    let cantidadPaquetes = parseInt(document.getElementById("cantidad_paquetes").value) || 1; // Número de paquetes

    let preciosBase = {
        "Deprisa": 39000,
        "Servientrega": {
            "Bogotá": 46000,
            "Barranquilla": 64450,
            "Barrancabermeja": 89050
        },
        "Envía": {
            "Bogotá": 63666,
            "Barranquilla": 993474,
            "Barrancabermeja": 140400
        }
    };

    let resultadosHTML = "<h3>Opciones de envío:</h3><ul>";

    if (preciosBase["Servientrega"][destino] && preciosBase["Envía"][destino]) {
        resultadosHTML += `<li>Deprisa: $${(preciosBase["Deprisa"] * cantidadPaquetes).toFixed(2)}</li>`;
        resultadosHTML += `<li>Servientrega: $${(preciosBase["Servientrega"][destino] * cantidadPaquetes).toFixed(2)}</li>`;
        resultadosHTML += `<li>Envía: $${(preciosBase["Envía"][destino] * cantidadPaquetes).toFixed(2)}</li>`;
    } else {
        resultadosHTML = "<p>No hay opciones de envío disponibles para el destino seleccionado.</p>";
    }

    resultadosHTML += "</ul>";
    document.getElementById("resultados").innerHTML = resultadosHTML;
});
