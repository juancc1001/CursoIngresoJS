/*Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los resto, 
de lo contrario los sumo. 
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y supero el 10".*/

function mostrar()
{
    var numero1;
    var numero2;
    do{
        numero1=prompt("ingrese el primer numero");
        numero1=parseInt(numero1);
    }while(isNaN(numero1));
    do{
        numero2=prompt("ingrese el segundo numero");
        numero2=parseInt(numero2);
    }while(isNaN(numero2));

    if(numero1==numero2){
        alert(numero1+ "" + numero2);
    }else{
        if(numero1>numero2){
            alert(numero1-numero2);
        }else{
            var suma=numero1+numero2
            alert(suma);
        }if(suma>10){
            alert("la suma es " + suma + " y superó el diez");
        }
    }
    


}
