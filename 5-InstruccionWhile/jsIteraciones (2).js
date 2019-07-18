/*al presionar el botón mostrar 10 repeticiones con números DESCENDENTES,
desde el 10 al 1.*/

function mostrar()
{
  /*
	alert('iteración while');

  var cont;
  cont=11;
  while(cont>1){
    cont--
    alert(cont);
  }*/
  /*
  var cont;
  cont=11

  do{
    cont--          //resta 1 a la variable
    alert(cont)     //muestra la variable si...
  }while(cont>1)    // variable es mayor a 1
*/

  for(var cont=10; cont>1; cont--);
    alert(cont);

}//FIN DE LA FUNCIÓN
