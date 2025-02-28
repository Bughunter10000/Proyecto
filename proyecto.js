// Variables útiles 
var precio_base = 2000;

// Valores de los recargos 
var recargo_edad = {
  18: 0.1,  // 10% para 18-24 años
  25: 0.2,  // 20% para 25-49 años
  50: 0.3   // 30% para 50 años o más
};

var recargo_casado = {
  18: 0.1,  // 10% para 18-24 años
  25: 0.2,  // 20% para 25-49 años
  50: 0.3   // 30% para 50 años o más
};

var recargo_hijos = 0.2;   // 20% por hijo
var recargo_propiedad = 0.35;  // 35% por propiedad
var recargo_ingreso = 0.05;    // 5% por ingreso

// Función para calcular el recargo de edad
function calcularRecargoEdad(edad, tipo) {
  if (edad >= 18 && edad < 25) return precio_base * tipo[18];
  if (edad >= 25 && edad < 50) return precio_base * tipo[25];
  if (edad >= 50) return precio_base * tipo[50];
  return 0;
}

// Función principal para calcular la cotización
function calcularCotizacion() {
  var continuar = true;

  while (continuar) {
    // Solicitar datos al usuario
    var nombre = prompt("Ingrese su nombre, o escriba 'Salir' para terminar");
    if (nombre.toUpperCase() === "SALIR") {
      continuar = false;
      break;
    }

    var edad = parseInt(prompt("¿Cuántos años tiene? Ingrese solamente números"));
    if (edad < 18) {
      alert("Lo sentimos, debe ser mayor de edad para obtener un seguro.");
      continue;
    }

    var casado = prompt("¿Está casado actualmente? (si/no)");
    var edad_conyuge_numero = 0;
    if ("SI" === casado.toUpperCase()) {
      var edad_conyuge = parseInt(prompt("¿Qué edad tiene su esposo/a?"));
      edad_conyuge_numero = edad_conyuge;
    }

    var hijos = prompt("¿Tiene hijos o hijas? (si/no)");
    var cantidad_hijos = 0;
    if ("SI" === hijos.toUpperCase()) {
      cantidad_hijos = parseInt(prompt("¿Cuántos hijos tiene?"));
    }

    var propiedades = parseInt(prompt("¿Cuántas propiedades posee? Ingrese solamente números"));
    var ingresos = parseFloat(prompt("¿Cuáles son sus ingresos mensuales? Ingrese solo números"));

    // Cálculo de recargos
    var recargo_total = 0;

    // Recargo por edad del asegurado
    recargo_total += calcularRecargoEdad(edad, recargo_edad);

    // Recargo por edad del cónyuge
    if (edad_conyuge_numero > 0) {
      recargo_total += calcularRecargoEdad(edad_conyuge_numero, recargo_casado);
    }

    // Recargo por cantidad de hijos
    recargo_total += cantidad_hijos * precio_base * recargo_hijos;

    // Recargo por propiedades
    recargo_total += propiedades * precio_base * recargo_propiedad;

    // Recargo por ingresos
    recargo_total += ingresos * recargo_ingreso;

    // Cálculo del precio final
    var precio_final = precio_base + recargo_total;

    // Mostrar resultados
    alert("Para el asegurado " + nombre);
    alert("El recargo total será de: Q." + recargo_total.toFixed(2));
    alert("El precio final del seguro será de: Q." + precio_final.toFixed(2));
  }
}

// Ejecutar la cotización
calcularCotizacion();