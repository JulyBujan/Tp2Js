let entrada = parseInt(prompt("Ingrese un número no mayor a 50:"));

if (entrada <= 50) {
    for (let numero=1; numero <= entrada; numero++) {
        for (let incremento=1; incremento <= numero; incremento++) {
            document.write(incremento);
        }
    document.write("<br>");
    }
}