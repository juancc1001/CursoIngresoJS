function mostrar()
{
/*
var clave = prompt("ingrese el número clave.");
var cont=0
while(clave!="utn750"){
  alert("ingrese la clave nuevamente");
  clave = prompt("ingrese la clave");
  cont++;
  if(cont==2){
    alert("numero de intentos excedido");
    break;
  }
}*/

var clave;
var cont;
cont=0;
do{
  clave=prompt("ingrese la clave");
  cont ++
  if(cont==3){
    alert("numero de intentos excedido");
    break;
    }
}while(clave!="utn750");


} //FIN DE LA FUNCIÓN
