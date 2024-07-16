const letras = "TRWAGMYFPDXBNJZSQVHLCKE"
do {
    let dni = parseInt(prompt("Ingrese un número:"));
    
    if ( isNaN(dni)) {
        alert("No es un número.");
    } else {
        let resultado = letras.charAt(dni%23)    
        document.write(" DNI: " + dni + " - Resultado: " + resultado + " .");
    }

} while (confirm("Deseas seguir?"))

