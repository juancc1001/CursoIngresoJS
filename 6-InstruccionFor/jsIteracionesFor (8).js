function mostrar()
{
  var mensaje="Es primo";
  var num;
  do{
    num=prompt("Ingrese un numero");
    parseInt(num);
  }while(isNaN(num));

  for(var div=2; div<num; div++){   //si no encuentra ningun divisor

    if(num%div==0){
      mensaje=("NO es primo");
      break;
    }
  }
  alert(mensaje)



}//FIN DE LA FUNCIÓN
