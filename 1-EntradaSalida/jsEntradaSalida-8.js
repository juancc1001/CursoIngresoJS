/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{

  var numDividendo;
  numDividendo = document.getElementById("numeroDividendo").value;

  var numDivisor;
  numDivisor = document.getElementById("numeroDivisor").value;

  var resto;
  resto = (parseInt(numDividendo)%parseInt(numDivisor));


  alert ("el resto es " + resto)
}

/* para sacar resto usar simbolo " % "*/


