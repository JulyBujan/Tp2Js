document.write (`<hr>`);
let inicio;
let final;


for(inicio=1; inicio<=500; inicio++){
    document.write (inicio)

    if(inicio % 4 == 0){
        document.write("(Múltiplo de 4)");
    }

    if(inicio % 9 == 0){
        document.write("(Múltiplo de 9)");
    }
    document.write (`<br>`);

}
