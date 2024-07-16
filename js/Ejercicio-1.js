const edad = parseInt(prompt("Ingrese su edad:"));

if (edad >= 18 && edad<80){
    document.write(`Ingresaste ${edad}, ya podés conducir`);
}
else if (isNaN(edad)){
    document.write(`Ingresaste ${edad},no es un número valido`);
}
else{
    document.write(`Ingresaste ${edad},no podes manejar`); 
}