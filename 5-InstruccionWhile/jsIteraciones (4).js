function mostrar()
{
  /*
	var num = prompt("ingrese un número entre 0 y 10.");
  while(num<0 || num>10){
    num=parseInt(num)
    num=prompt("ingrese un número entre 0 y 10.");
  }
    while(isNaN(num)){
    num=parseInt(num)
    num=prompt("ingrese un número entre 0 y 10.");
  }
  document.getElementById("Numero").value=num
  */

  var num
  do{
    num=prompt("ingrese un número entre 0 y 10.");
    num=parseInt(num)
  }while((num<0 || num>10) || isNaN(num));
  document.getElementById("Numero").value=num

}//FIN DE LA FUNCIÓN
