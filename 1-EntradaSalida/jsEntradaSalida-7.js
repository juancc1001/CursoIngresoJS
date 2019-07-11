/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar()
{

  var n1;
    n1 = document.getElementById("numeroUno").value;

  var n2;
    n2 = document.getElementById("numeroDos").value;

  var suma;
    suma = (parseInt(n1)+parseInt(n2));
alert("la suma es " + suma);

}


function restar()
{

  var n1;
    n1 = document.getElementById("numeroUno").value;

 var n2;
    n2 = document.getElementById("numeroDos").value;

 var resta;
    resta = (parseInt(n1)-parseInt(n2));

  alert ("la resta es " + resta);
}


function multiplicar()
{
  var
   n1;
   n1 = document.getElementById("numeroUno").value;

  var n2;
   n2 = document.getElementById("numeroDos").value;

  var multiplicacion;
    multiplicacion = (parseInt(n1)*parseInt(n2));

  alert ("la multiplicación es " + multiplicacion);
}


function dividir()
{

  var n1;
   n1 = document.getElementById("numeroUno").value;

  var n2;
   n2 = document.getElementById("numeroDos").value;

  var division;
    division = (parseInt(n1)/parseInt(n2));

alert ("la división es " + division)
}

