function mostrar()
{

var mes;
mes = document.getElementById('mes').value;

switch(mes){
  case "Julio":
  case "Agosto":
    alert("Abrigate que hace frío");
    break;
  case "Septiembre":
  case "Octubre":
  case "Noviembre":
  case "Diciembre":
    alert("Ya pasamos el frio, ahora calor!!!");
    break;
  default:
    alert("Falta para el invierno")
    break;

}
//si varios casos tienen la misma linea del codigo ponemos los casos vacios sin break//

}//FIN DE LA FUNCIÓN
