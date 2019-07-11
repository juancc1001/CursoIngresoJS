/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{var numero1;
    numero1 = parseInt (document.getElementById("numeroUno").value);
var numero2;
    numero2 = parseInt (document.getElementById("numeroDos").value);

var suma;
  suma = (numero1+numero2);

alert("la suma es " + suma);
}
/* es igual hacer parseInt en la var o en la operacion*/

