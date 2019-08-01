/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var precio1=document.getElementById("PrecioUno").value;
var precio2=document.getElementById("PrecioDos").value;
var precio3=document.getElementById("PrecioTres").value;
parseInt(precio1);
parseInt(precio2);
parseInt(precio3);
var suma=(precio1+precio2+precio3);

function Sumar () 
{   
    alert("la suma es " + suma);
}
function Promedio () 
{   var promedio = (suma/3);
	alert("el promedio es " + promedio);
}
function PrecioFinal () 
{   var PrecioFinal=(suma+suma*0.21);
    alert("el precio final es: " + PrecioFinal);	
}