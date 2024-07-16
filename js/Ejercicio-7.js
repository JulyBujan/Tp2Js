let entrada = parseInt(prompt("Ingrese un número menor a 50:"));

if (entrada < 50) {
    for (let numero=entrada; numero > 0; numero--) {
        for (let incremento=0; incremento < numero; incremento++) {
            document.write(numero);
        }
    document.write("<br>");
    }
}