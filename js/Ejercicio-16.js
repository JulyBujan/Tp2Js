let entrada=prompt("Ingrese una cadena de texto:");
let resultado="";
for(let i=entrada.length-1; i>=0 ; i--){
    resultado = resultado + entrada.charAt(i);
}
document.write(resultado);