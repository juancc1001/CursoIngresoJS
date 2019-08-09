/*Bienvenidos. 
Realizar el algoritmo que permita ingresar la marca del producto, 
el peso el cual debe ser entre 1 y 100 (validar), 
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera 
e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado 
c) La cantidad de productos que se conservan a menos de 0 grados. 
d) El promedio del peso de todos los productos.	
f) El peso máximo y el mínimo.*/

function mostrar()
{
    var respuesta=true;
    var marca;
    var peso;
    var cont=0;
    var temperatura;
    var conttemperaturapar=0;
    var maspesado;
    var contbajocero=0;
    var promediopeso;
    var acumpeso=0;
    var pesomax;
    var pesomin;

    do{
    marca=prompt("ingrese la marca del producto");
    cont++;
    do{
        peso=prompt("ingrese el peso del producto");
        peso=parseInt(peso);
    }while(isNaN(peso) || (peso<1 || peso>100));
    do{
        temperatura=prompt("ingrese la temperatura de almacenamiento del producto");
        temperatura=parseInt(temperatura);
    }while(isNaN(temperatura) || (temperatura<-30 || temperatura>30));

    if(temperatura%2==0 && (temperatura>0 || temperatura<0)){
        conttemperaturapar++;
    }
    if(cont==1){
        maspesado=marca;
    }else{
        if(peso>maspesado)
        maspesado=marca;
    }
    if(temperatura<0){
        contbajocero++;
    }

    acumpeso=acumpeso+peso;
    promediopeso=acumpeso/cont;

    if(cont==1){
        pesomax=peso;
        pesomin=peso;
    }else{
        if(peso>pesomax){
            pesomax=peso;
        }else{
            if(peso<pesomin){
                pesomin=peso;
            }
        }
    }

    respuesta=confirm("¿desea continuar?");

    }while(respuesta);
    document.write("cantidad de temperaturas pares: " + conttemperaturapar);
    document.write("<br>");
    document.write("el producto mas pesado es: " + maspesado);
    document.write("<br>");
    document.write("cantidad de productos que se deben almacenar a menos de 0 grados: " + contbajocero);
    document.write("<br>");
    document.write("el promedio de peso es: " + promediopeso);
    document.write("<br>");
    document.write("el peso maximo es: " + pesomax);
    document.write("<br>");
    document.write("el peso minimo es: " + pesomin);


}

