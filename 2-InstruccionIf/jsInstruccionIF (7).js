function mostrar()
{
//tomo la edad

  var edad;
  edad = document.getElementById("edad").value;

  var estCivil;
  estCivil = document.getElementById("estadoCivil").value;

  if(edad<18 && estCivil!="Soltero"){
    alert("usted es muy pequeño para NO ser soltero");
  }


}//FIN DE LA FUNCIÓN
