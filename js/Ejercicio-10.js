const fila = parseInt(prompt ("Ingrese número de filas"));
const columna = parseInt(prompt ("Ingrese número de columna"));
let celda = fila*columna;

document.write(`<table> <tbody>`);

for(let indiceFila=1; indiceFila <=fila; indiceFila++){
    document.write (`<tr>`)
    for (let indiceColumna=1; indiceColumna<=columna; columna++);
    {
        document.write (`<td>${celda} </td>`);
        celda--
    }
    document.write (`<tr>`)  
}
document.write (`</tbody>>/table>`);
  