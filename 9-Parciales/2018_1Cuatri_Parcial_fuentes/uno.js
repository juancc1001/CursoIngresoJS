
function mostrar()
{

  var base;
  base = prompt("base en cm");

  var altura;
  altura  = prompt("altura en cm");

  var perimetro;
  perimetro = (parseInt(base)*2 + parseInt(altura)*2);

  alert ("El perímetro es " + perimetro + " cm");

}
