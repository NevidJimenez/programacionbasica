/*Declarando las variables para proyecto fizzbuzz*/

var numeros = 100;

/*Utilizando el ciclo FOR para imprimir 100 numeros consecutivos, pero cada divisible entre 3 será FIZZ, y cada divisible entre 5 será BUZZ, si es divisible entre ambos dirá FIZZBUZZ*/

for(var i=1; i<=100; i++) {
  
  if (esDivisible(i,3)) {
    document.write("fizz");
  }
  
  if (esDivisible(i,5)) {
    document.write("buzz");
  }

  if (!esDivisible(i,3) && !esDivisible(i,5)) {
    document.write(i);
  }

  document.write("<br>");
}

/*Declarando la funcion que se esta repitiendo para comparar si los numeros son divisibles o no */

function esDivisible (num, divisor){
  if (num % divisor == 0){
    return true;
  }
  else {
    return false;
  }
}