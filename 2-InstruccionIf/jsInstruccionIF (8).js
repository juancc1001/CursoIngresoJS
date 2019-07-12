function mostrar()
{
//tomo la edad

  var edad;
  edad=document.getElementById("edad").value;

  var estCivil;
  estCivil=document.getElementById("estadoCivil").value;

  if(edad>17 && estCivil=="Soltero"){
    alert("Es soltero y NO es menor");
  }

}//FIN DE LA FUNCIÓN
