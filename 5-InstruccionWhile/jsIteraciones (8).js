function mostrar()
/*Al presionar el botón pedir números hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
{
  var num
	var positivo=0;
	var negativo=1;
  var respuesta=true;

  while(respuesta){
    do{
      num=prompt("ingrese un numero");
      num=parseInt(num);
      }while (isNaN(num));
    if(num>=0){
      positivo=positivo+num;
      }else{
        negativo=negativo*num;
    }

    respuesta=confirm("¿desea continuar?");
  }

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
