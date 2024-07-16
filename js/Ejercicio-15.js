let entrada=prompt("Ingrese una cadena de texto:");
let resultado=0;
for(let i=0; i<entrada.length; i++){
    switch (entrada.charAt(i)) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            resultado = resultado + 1 ;
            break;
        default:
    }
}
document.write("El resultado es: " + resultado );