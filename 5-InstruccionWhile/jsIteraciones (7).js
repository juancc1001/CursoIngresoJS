function mostrar()
{
	var cont=0;
	var acumulador=0;
	var resp=true;//respuesta es True hasta que se ingrese lo contrario en el confirm
  var num;
  while(resp){
    do{
      num=prompt("ingrese un numero");
      num=parseInt(num);
    }while(isNaN(num));
    cont++
    acumulador=acumulador+num;
    resp=confirm("¿desea continuar?");
  }
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/cont;

}//FIN DE LA FUNCIÓN
