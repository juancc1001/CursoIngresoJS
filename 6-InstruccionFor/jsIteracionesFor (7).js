function mostrar()
{
  var cont=0;
  var num;
  do{
    num=prompt("ingrese numero");              //verifica
    parseInt(num);
  }while(isNaN(num));

  for(var div=0; div<=num; div++){   // div es el divisor, crea bucle hasta llegar al valor de num
    if(num%div==0){
      cont ++;
      console.log("divisible por " + div);
    }

  }
  console.log("cant de divisores: " + cont);



}//FIN DE LA FUNCIÓN
