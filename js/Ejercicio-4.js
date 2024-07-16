let suma = 0 ;
do {
    let numero = parseInt(prompt("Ingrese un número:"));

    if ( isNaN(numero)) {
        alert("No es un número.");
    } else {
        suma = suma + numero ;
    }

} while (confirm("Deseas seguir?"))

document.write(suma);