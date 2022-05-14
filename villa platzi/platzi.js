//Trayendo el id de canvas a js para poderlo manipular y declarar su contexto.
var vp = document.getElementById("villa_platzi");
var papel = vp.getContext("2d");

//Declarando los JSON para traer la imagen y darles un estado de "falso".
var fondo = {
  url: "tile.png",
  cargaOk: false
}

var vaca = {
  url: "vaca.png",
  cargaOk: false
}

var cerdo = {
  url: "cerdo.png",
  cargaOk: false
}
var pollo = {
  url: "pollo.png",
  cargaOk: false
}

//Declarando las variables de cantidad aleatoria para el numero de animales.
var cantidad1 = aleatorio(0, 36);
var cantidad2 = aleatorio(0, 36);
var cantidad3 = aleatorio(0, 36);

/*Declarando la variable "imagen" y poniendole un "escuchador de eventos" 
para dibujar y traer el mapa desde js y esperar a que esté cargado.*/
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

/*Declarando las funciones de "cargar..." para cambiar el estado a "true" 
y aplicar la función "dibujar".*/
function cargarFondo(){
  fondo.cargaOk = true;
  dibujar()
}

function cargarVacas(){
  vaca.cargaOk = true;
  dibujar()
}

function cargarCerdo(){
  cerdo.cargaOk = true;
  dibujar()
}

function cargarPollo(){
  pollo.cargaOk = true;
  dibujar()
}

//Declarando la función "dibujar" para dibujar el fondo y los animales.
function dibujar(){

  if(fondo.cargaOk){
    papel.drawImage(fondo.imagen, 0, 0);
  }

  //ciclo para dibujar vacas mediante un número aleatório.
  for(v=0; v < cantidad1; v++){
    if(vaca.cargaOk){
    var x = aleatorio(0, 5);
    var y = aleatorio(0, 5);
    x = x * 80;
    y = y * 80;
    papel.drawImage(vaca.imagen, x, y);
    }
  }
  //Console.log para saber el valor de "cantidad".
  console.log(cantidad1);

  //ciclo para dibujar vacas mediante un número aleatório.
  for(v=0; v < cantidad2; v++){
    if(cerdo.cargaOk){
    var x = aleatorio(0, 5);
    var y = aleatorio(0, 5);
    x = x * 80;
    y = y * 80;
    papel.drawImage(cerdo.imagen, x, y);
    }
  }
  //Console.log para saber el valor de "cantidad".
  console.log(cantidad2);

  //ciclo para dibujar vacas mediante un número aleatório.
  for(v=0; v < cantidad3; v++){
    if(pollo.cargaOk){
    var x = aleatorio(0, 5);
    var y = aleatorio(0, 5);
    x = x * 80;
    y = y * 80;
    papel.drawImage(pollo.imagen, x, y);
    }
  }
  //Console.log para saber el valor de "cantidad".
  console.log(cantidad3);

}

//Declarando la funcion "aleatorio" para crear números aleatorios.
function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}