let entrada=prompt("Ingrese una cadena de texto:");
let resultado=0;
let vocal="";
for(let i=0; i<entrada.length; i++){
    switch (entrada.charAt(i)) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            if (vocal=="") {
                vocal = entrada.charAt(i);
                resultado = i + 1;
            }
            break;
        default:
    }
}
document.write("La vocal es: " + vocal + " y está en la posición: " + resultado );