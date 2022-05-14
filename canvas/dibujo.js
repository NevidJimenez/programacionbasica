//declarando las variables de la caja y el boton
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

//Declarando el lienzo de canvas
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

//Declarando la función dibujarLinea
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

//declarando la funcion para dibujar por clicks
function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var espacio = ancho / lineas;

  //dibujando
  while(l<lineas)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea("blue", 0, yi, xf, 300);
    l = l + 1;
  }

}