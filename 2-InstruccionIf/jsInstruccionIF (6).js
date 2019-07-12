function mostrar()
{

//tomo la edad
  var edad;
  edad = document.getElementById("edad").value;

  if(edad>17){
  alert("Usted es un adulto");
  }else{
    if (edad>12){
    alert("Usted es un adolescente");
    }else{
      alert("usted es un niño");
    }
  }
 //NO concatenar muchos "IF"//


}//FIN DE LA FUNCIÓN
