function mostrar()
{
  /*
  var sexo = prompt("ingrese f ó m .");

  while(sexo1!="f" && sexo!="m"){
    sexo = prompt("ingrese nuevamente");
  }

  document.getElementById("Sexo").value=sexo;
  */

  var sexo;

  do{
    sexo=prompt("ingrese f o m");

  }while(sexo!="f" && sexo!="m");

  document.getElementById("Sexo").value=sexo;

}//FIN DE LA FUNCIÓN
