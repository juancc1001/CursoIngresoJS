function mostrar()
{


  var mes;
  mes= document.getElementById('mes').value;

  switch(mes){
    case "Febrero":
    alert("Este mes NO tiene mas de 29 días")
    break;
    default:
    alert("Este mes tiene 30 días o más")
    break;
  }



}//FIN DE LA FUNCIÓN
