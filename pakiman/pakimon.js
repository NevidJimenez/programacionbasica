/* Declarndo la clase, se define el nombre de la clase y despues se usa el "constructor". funciona exactamente igual que una funcion "function" pero para los objetos, las variables que van dentro de la funcion, se utiliza "this" para activarlos ya que son variables locales y no globales. */

class Pakiman 
{
  constructor(nombre, vida, ataque)
  {
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;

    this.imagen = new Image();
    this.imagen.src = imagenes[this.nombre];
  }

  hablar()
  {
    alert(this.nombre);
  }

  mostrar()
  {
    document.body.appendChild(this.imagen);
    document.write("<br><strong>" + this.nombre + "</strong><br>");
    document.write("Vida: " + this.vida + "<br>");
    document.write("Ataque: " + this.ataque + "<hr>");
  }

}