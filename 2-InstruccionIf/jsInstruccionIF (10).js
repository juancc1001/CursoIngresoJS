function mostrar()
{
	//Genero el número RANDOM entre 1 y 10
  var nota;
  nota = Math.floor(Math.random()*(11-1)+1);

  alert("su nota es " + nota)

  if(nota>=9){
    alert("EXCELENTE");
  }else{
    if(nota>=4){
      alert("Aprobado")
    }else{
      alert("Vamos, la próxima se puede")
    }
  }

}//FIN DE LA FUNCIÓN
