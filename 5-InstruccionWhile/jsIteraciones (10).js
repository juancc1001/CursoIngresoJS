function mostrar()
/*
Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos. 2-Suma de los positivos. 3-Cantidad de positivos.
4-Cantidad de negativos. 5-Cantidad de ceros. 6-Cantidad de números pares.
7-Promedio de positivos. 8-Promedios de negativos. 9-Diferencia entre positivos y negativos,
(positvos-negativos).*/
{
  var num;
  var positivo=0;
  var contpositivo=0;
  var negativo=0;
  var contnegativo=0;
  var contcero=0;
  var respuesta=true;
	//declarar contadores y variables
  while(respuesta){
    do{
      num=prompt("ingrese numero");
      num=parseInt(num);
    }while(isNaN(num));

    if(num>0){
      positivo=positivo+num;
      contpositivo++;
    }else{
      if(num<0){
        negativo=negativo+num;
        contnegativo++;
      }else{
        contcero++
      }
    }
    respuesta=confirm("¿Desea continuar?");
  }

  alert("suma de negativos: " + negativo);
  alert("cantidad numeros positivos: " + contpositivo);
  alert("suma de numeros positivos " + positivo);
  alert("cantidad de numeros negativos: " + contnegativo);
  alert("cantidad de ceros " + contcero);

}//FIN DE LA FUNCIÓN
