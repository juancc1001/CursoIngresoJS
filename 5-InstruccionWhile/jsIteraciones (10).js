function mostrar()
/*
Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos. 2-Suma de los positivos. 3-Cantidad de positivos.
4-Cantidad de negativos. 5-Cantidad de ceros. 6-Cantidad de números pares.
7-Promedio de positivos. 8-Promedios de negativos. 9-Diferencia entre positivos y negativos,
(positvos-negativos).*/ {
  var num;
  var positivo = 0;
  var contpositivo = 0;
  var negativo = 0;
  var contnegativo = 0;
  var contcero = 0;
  var contpares = 0
  var promediopos;
  var promedioneg;
  var respuesta = true;
  var diferencia;
  var resto;
  //declarar contadores y variables
  while (respuesta) {
    do {
      num = prompt("ingrese numero");   //verificar que sea un numero
      num = parseInt(num);
    } while (isNaN(num));

    if (num > 0) {                      //si es positivo
      positivo = positivo + num;        //suma positivo c/ acumulador
      contpositivo++;
      resto=parseInt(num%2);
    } else {                            //si es negativo:
      if (num < 0) {
        negativo = negativo + num;
        contnegativo++;
        resto=parseInt(num%2);
      } else {                          //si no es ninguno de los dos (es 0)
        contcero++
        resto=1
      }
    }
    if (resto==0){                      //si el numero era par:
      contpares++;
    }

    if(contpositivo==0){
      promediopos=0;
    }else{
      promediopos = (positivo / contpositivo);
    }

    if (contnegativo==0){
      promedioneg=0
    }else{
      promedioneg = (negativo / contnegativo);
    }

    diferencia = (positivo - negativo);
    respuesta = confirm("¿Desea continuar?");
  }

  document.write("suma de negativos: " + negativo);
  document.write("<br>");
  document.write("suma de numeros positivos " + positivo);
  document.write("<br>");
  document.write("cantidad numeros positivos: " + contpositivo);
  document.write("<br>");
  document.write("cantidad de numeros negativos: " + contnegativo);
  document.write("<br>");
  document.write("cantidad de ceros " + contcero);
  document.write("<br>");
  document.write("cant pares: " + contpares);
  document.write("<br>");
  document.write("promedio de numeros positivos: " + promediopos);
  document.write("<br>");
  document.write("promedio numeros negativos: " + promedioneg);
  document.write("<br>");
  document.write("diferencia entre positivos y negativos: " + diferencia);

}//FIN DE LA FUNCIÓN
