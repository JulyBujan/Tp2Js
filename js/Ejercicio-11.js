let nombre1=prompt("Ingrese un nombre: ");
let edad1 = parseInt(prompt("Ingrese la edad: "));

let nombre2=prompt("Ingrese un nombre: ");
let edad2 = parseInt(prompt("Ingrese la edad: "));

let nombre3=prompt("Ingrese un nombre: ");
let edad3 = parseInt(prompt("Ingrese la edad: "));

const edadMayor = Math.max(edad1, edad2, edad3);

if (edad1 == edadMayor) {
    document.write(nombre1);
} else if (edad2 == edadMayor) {
    document.write(nombre2);
} else {
    document.write(nombre3);
}

