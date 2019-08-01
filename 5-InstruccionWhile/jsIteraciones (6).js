function mostrar()
{

	var contador=0;
	var suma=0;
  var num
  do{
    contador++
    do{
    num=prompt("ingrese numero");
    num=parseInt(num);
    }while(isNaN(num))
    suma=suma+num; //la variable suma se va modificando cada vez que se ingresa un num
  }while(contador<5);// es lo mismo hacer un while primero y un do while adentros

  document.getElementById('suma').value=suma;
  document.getElementById('promedio').value=suma/5;

}//FIN DE LA FUNCIÓN
