/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2
bolsas de cemento y 3 de cal, debemos mostrar cuantas 
bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/


function Rectangulo () 
{ 
    var largo = document.getElementById("Largo").value;
    var ancho = document.getElementById("Ancho").value;
    parseInt(largo);
    parseInt(ancho);
    var alambre1=(largo*ancho*3);
    alert("la cantidad de alambre debe ser de " + alambre1);
}
function Circulo () 
{   var radio=  document.getElementById("Radio").value;
    parseInt(radio);
    var alambre2=(radio*2*3.14);
    alert("la cantidad de alambre debe ser" + alambre2);
    	
}
function Materiales () 
{   
    var perimetro=(largo*ancho);
    parseInt(perimetro);
    var cemento=(perimetro*2);
    var cal=(perimetro*3);
    alert("cant de bolsas de cemento: "+ cemento + ", y cant de bolsas de cal: " + cal);
}