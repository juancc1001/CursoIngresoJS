function mostrar()
/*Al presionar el botón pedir números hasta que el
 usuario quiera, mostrar el número máximo y el número mínimo ingresado.*/

{
  var num;
  var max;
  var min;
  var respuesta = true;
  var primeravez=true;
  while(respuesta){
    do{
      num=prompt("ingrese un numero");
      num=parseInt(num);
    }while(isNaN(num));

    if(primeravez){
    primeravez=false;
    min=num;
    max=num;
    }else{
      if(num>max){
      max=num;
      }else{
        if(num<min){
          min=num;
        }
      }
    }
    respuesta=confirm("¿desea continuar?");

  }

  document.getElementById("maximo").value=max;
  document.getElementById("minimo").value=min;







}//FIN DE LA FUNCIÓN
