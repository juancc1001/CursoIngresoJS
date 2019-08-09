function mostrar()
{

  var precio1;
  precio1 = prompt("Ingrese el precio");

  var porc;
  porc = prompt("Ingrese porcentaje a descontar");

  var descuento;
  descuento = (parseInt(precio1)*(parseInt(porc)/100));


  var precio2;
  precio2 = (parseInt(precio1)-parseInt(descuento));

 document.getElementById("elPrecioFinal").value = precio2;
}
