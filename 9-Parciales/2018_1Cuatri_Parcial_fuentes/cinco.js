function mostrar()
{
var planeta=prompt("ingrese un planeta");
switch (planeta){
    case "tierra":
        alert("acá vivimos");
        break;
    case "mercurio":
    case "venus":
        alert("acá hace más calor");
        break;
    case "marte":
    case "jupiter":
    case "saturno":
    case "urano":
    case "neptuno":
    case "pluton":
        alert("acá hace más frío");
        break;
    default:
        alert("esto no es un planeta");
        break;
}

}
