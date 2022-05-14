//Declarando el objeto "teclas" con sus valores.
var teclas = 
{
  UP: 38, 
  DOWN: 40, 
  LEFT: 37, 
  RIGHT: 39
};

//Declarando el escuchador del evento "levantar tecla" y aplicar función.
document.addEventListener("keyup", dibujarTeclado);
document.addEventListener("mousedown", dibujarTeclado);

//Declarando el contexto del canvas
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red",149,149,151,151,papel);

//Declarando la función dibujarLinea
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

//Declarando función "dibujarTeclado" y mandando señal al console.
function dibujarTeclado(evento)
{
  console.log(evento);
  var colorcito = "red";
  var movimiento = 10;

  switch(evento.keyCode)
  {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
    break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
    break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
    break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
    break;
  }
}