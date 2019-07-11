function mostrar()
{
//tomo la edad
var edad;
edad = document.getElementById("edad").value;

if(edad<13){
  alert("Usted es un niño");
}

if(edad>=13 && edad<=18){
  alert("Usted es un adolescente");
}

if (edad>18){
  alert("Usted es un adulto");
}


}//FIN DE LA FUNCIÓN
