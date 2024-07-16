let totalCadena = "";

do {
  let cadena = prompt("Introduce una cadena");

  if (totalCadena == "") {
    totalCadena = totalCadena + cadena;
  } else {
    totalCadena = totalCadena + "+hola" + cadena;
  }
} while (confirm("Desea seguir?"));

document.write(totalCadena);
