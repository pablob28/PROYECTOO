document.getElementById("cotizacionForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Capturar los valores ingresados por el usuario
  let origen = document.getElementById("origen").value;
  let direccion_origen = document.getElementById("direccion_origen").value;
  let destino = document.getElementById("destino").value;
  let direccion_destino = document.getElementById("direccion_destino").value;
  let peso = document.getElementById("peso").value;
  let dimensiones = document.getElementById("dimensiones").value;
  let valor_declarado = document.getElementById("valor_declarado").value;
  let tipo_envio = document.getElementById("tipo_envio").value;
  let pago = document.getElementById("pago").value;
  let notas = document.getElementById("notas").value;

  // Simulación de cotización con nuevos factores
  let empresas = [
      { nombre: "Servientrega", precio: calcularPrecio(peso, valor_declarado, tipo_envio), enlace: "https://www.servientrega.com/wps/portal/cotizador" },
      { nombre: "Inter Rapidísimo", precio: calcularPrecio(peso, valor_declarado, tipo_envio), enlace: "https://interrapidisimo.com/cotiza-tu-envio/" },
      { nombre: "Envia", precio: calcularPrecio(peso, valor_declarado, tipo_envio), enlace: "https://www.envia.co/" }
  ];

  // Ordenar por precio
  empresas.sort((a, b) => a.precio - b.precio);

  // Mostrar resultados mejorados
  let resultadosHTML = "<h3>Opciones de envío:</h3><ul>";
  empresas.forEach(empresa => {
      resultadosHTML += `<li>${empresa.nombre}: $${empresa.precio.toFixed(2)} 
          <a href="${empresa.enlace}" target="_blank">Cotizar aquí</a></li>`;
  });
  resultadosHTML += "</ul>";

  document.getElementById("resultados").innerHTML = resultadosHTML;
});

// Función para simular cálculo de precios con más factores
function calcularPrecio(peso, valor_declarado, tipo_envio) {
  let base = parseFloat(peso) * 5; // Simulación de costo por peso
  let seguro = parseFloat(valor_declarado) * 0.02; // Simulación de costo por seguro
  let expressFee = tipo_envio === "express" ? 15 : 0; // Tarifa adicional por envío rápido
  return base + seguro + expressFee;
}
