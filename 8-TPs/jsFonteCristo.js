/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{
 	
}
var num
var contpares=0
function NumerosPares ()
{   
    do{
        num=document.getElementById("numero").value;
        parseInt(num);
    }while(isNaN(num) || num<0);

    for(var par=1; par<=num; par++){            //crea variable "par" y va sumandole 1 desde 0 al numero
        if(par%2==0){                           //verifica que cada numero "par" sea par (resto=0)
        contpares++                             //si es par aumenta el contador de pares
        }                                      
    }
    console.log("cantidad de numeros pares hasta el numero: " + contpares);
    contpares=0;

}
var contimp=0
function NumerosImpares ()
{
    do{
        num=document.getElementById("numero").value;
        parseInt(num);
    }while(isNaN(num) || num<0);

    for(var impar=0; impar<=num; impar++){
        if (impar%2!=0){
            contimp++;
        }
    }
    console.log("Cantidad de números impares hasta el numero: " + contimp);
    contimp=0
}

function NumerosDivisibles ()
{
    var contdiv=0;
    do{
        num=document.getElementById("numero").value;
        parseInt(num);
    }while(isNaN(num) || num<0);

    for(var div=0; div<=num; div++){
        if(num%div==0){
            contdiv++;
        }
    }
    console.log("cantidad de numeros por los que es divisible: " + contdiv);
    contdiv=0;
}

function VerificarPrimo ()
{   
    var mensaje="Es primo";
    do{
        num=document.getElementById("numero").value;
        parseInt(num);
    }while(isNaN(num) || num<0);

    for(var div2=2; div2<num; div2++){
        if(num%div2==0){
        mensaje="NO es primo";
        }
    }
    console.log(mensaje);
    mensaje="Es primo";
}

/*function NumerosPrimos ()
{   var contprimos=0
    var contador=0
    do{
        num=document.getElementById("numero").value;
        parseInt(num);
    }while(isNaN(num) || num<0);
    
    do{
        contador++
        for(var div3=2; div3<num; div3++){
        if(contador%div3!=0){
            contprimos++
        }
        }
    }while(contador<num);
    console.log("cantidad de numeros primos: " + contprimos);
    contprimos=0;
}
