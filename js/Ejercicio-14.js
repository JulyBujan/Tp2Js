let entrada=prompt("Ingrese una cadena de texto:");
let resultado="";
for(let i=0; i<entrada.length; i++){
    if (resultado==""){
        resultado = resultado + entrada.charAt(i);
    } else {
        resultado = resultado + "-" + entrada.charAt(i);
    }
}
document.write(resultado);