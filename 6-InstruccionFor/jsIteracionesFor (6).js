function mostrar()
{
  var num;
  var cont=0;
  do{
    num=prompt("ingrese un numero")
  }while(isNaN(num));

  for(var par=0; par<=num; par++){
    if(par%2==0 && par!=0){
      cont++;
      console.log ("numeros pares:");
      console.log(par)
    }
  }
  console.log("cant de numeros pares: " + cont);



}//FIN DE LA FUNCIÓN
