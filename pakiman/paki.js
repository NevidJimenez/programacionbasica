var imagenes = [];

imagenes ["cauchin"] = "vaca.png";
imagenes ["pokacho"] = "pollo.png";
imagenes ["tocinauro"] = "cerdo.png";

/* Declarndo la clase, se define el nombre de la clase y despues se usa el "constructor". funciona exactamente igual que una funcion "function" pero para los objetos, las variables que van dentro de la funcion, se utiliza "this" para activarlos ya que son variables locales y no globales. */

class Pakiman 
{
  constructor(nombre, vida, ataque)
  {
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;

    this.imagen = new image();
    this.imagen.src = imagenes[this.nombre];
  }

  hablar()
  {
    alert(this.nombre);
  }

  mostrar()
  {
    document.write("<p>");
    document.body.appendChild(this.imagen);
    document.write("<strong>" + this.nombre + "<strong/><br>");
    document.write("<strong>" + this.vida + "<strong/><br>");
    document.write("<strong>" + this.ataque + "<strong/>");
  }

}

/* Llamando a la clase mediante una variable y añadiendole "new", pasando por los parametros los datos que vamos a usar para cada variable.  */

var cauchin = new Pakiman("cauchin", 100, 30);

var pokacho = new Pakiman("pokacho", 80, 50);

var tocinauro = new Pakiman("tocinauro", 120, 40);

console.log(cauchin, pokacho, tocinauro);

pokacho.mostrar();