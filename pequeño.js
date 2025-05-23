document.getElementById("cotizacionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let tipoEnvio = document.getElementById("tipo_envio").value;
    let peso = parseFloat(document.getElementById("peso").value) || 1; 
    let dimensiones = document.getElementById("dimensiones").value.split("x").map(Number); 

    let preciosBase = {
        "normal": 12615,
        "express": 26594
    };

    let factorPeso = peso > 1 ? peso * 500 : 0; // Se suma $500 por cada kg extra
    let factorDimensiones = (dimensiones[0] > 32 || dimensiones[1] > 16 || dimensiones[2] > 12) ? 1500 : 0; // Se suma si es más grande

    let precioTotal = (preciosBase[tipoEnvio] + factorPeso + factorDimensiones).toFixed(2);

    let resultadosHTML = `<h3>Precio de envío:</h3>
                          <p>Tipo de envío: <strong>${tipoEnvio}</strong></p>
                          <p>Peso: <strong>${peso} kg</strong></p>
                          <p>Dimensiones: <strong>${dimensiones.join("x")} cm</strong></p>
                          <p>Precio total: <strong>$${precioTotal}</strong></p>`;

    document.getElementById("resultados").innerHTML = resultadosHTML;
});
