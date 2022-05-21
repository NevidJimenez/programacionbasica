/* Declarando el array de las imagenes */

var imagenes = [];

imagenes ["cauchin"] = "vaca.png";
imagenes ["pokacho"] = "pollo.png";
imagenes ["tocinauro"] = "cerdo.png";

/* Llamando a la clase mediante una variable y añadiendole "new", pasando por los parametros los datos que vamos a usar para cada variable.  */

var coleccion = [];
coleccion.push( new Pakiman("cauchin", 100, 30) );
coleccion.push( new Pakiman("pokacho", 80, 50) );
coleccion.push( new Pakiman("tocinauro", 120, 40) );

for ( var freddito of coleccion )
{
  freddito.mostrar();
}