function mostrar()
{

  var mes
  mes = document.getElementById("mes").value

  switch(mes){
    case "Febrero":
      alert ("Este mes tiene 28 días");
      break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "noviembre":
      alert("Este mes tiene 30 días");
      break;
    default:
      alert("Este mes tiene 31 días")
      break;
  }





}//FIN DE LA FUNCIÓN
