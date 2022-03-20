// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
    const array=[];
    const entries=Object.entries(objeto);
    for (let index = 0; index < entries.length; index++) {
      array.push(entries[index]);
    }
    return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var letrasRepetidas='';
  var caracter=null;
  var repetido=null;
  var objeto={};
    for (let i = 0; i < string.length; i++) {
      repetido=0;
      caracter=string.charAt(i);
      for (let j = 0; j < string.length; j++) {
        if(string.charAt(i)===string.charAt(j)){
          repetido++;
        }
      }
      if(letrasRepetidas.includes(caracter)===false){
        objeto[caracter]=repetido;
      }
    }
    return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var palabraMi="";
  var palabraMa="";
  for(let letra in s){
    if(s[letra] === s[letra].toUpperCase()){
      palabraMa=palabraMa+s[letra];
    }else{
      palabraMi=palabraMi+s[letra];
    }
  }
  palabraMa=palabraMa+palabraMi;
  return palabraMa;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var palabras=str.split(" ");
  var palabraReversa="";
  for (let i = 0; i < palabras.length; i++) {
    for (let j = palabras[i].length; j>=0 ; j--) {
      palabraReversa=palabraReversa+palabras[i].charAt(j);
    }
    if(i<palabras.length-1){
      palabraReversa+=" ";
    }
  }
  return palabraReversa;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numeroPuente=numero;
  var numeroLength=numero.toString().length;
  var contadorDivision=0;
  var numeroReverse="";
  while(contadorDivision<numeroLength){
    numeroReverse=numeroReverse+(numero%10);
    numero=Math.floor(numero/10);
    contadorDivision++;
  }
  if(numeroReverse==numeroPuente){
    return "Es capicua";
  }else{
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var lenghtCadena=cadena.length;
  var cadenaNueva=cadena;
  var existeLetra=false;
  for (let i = 0; i < lenghtCadena; i++) {
    if(cadena.charAt(i)==='a' || cadena.charAt(i)==='b' || cadena.charAt(i)==='c'){
      cadenaNueva=cadenaNueva.replace(cadena.charAt(i),"");
      existeLetra=true;
    }
  }
  if(existeLetra===false){
    return cadena;
  }else{
    return cadenaNueva;
  }
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function(a,b){
    if(a.length>b.length){
      return 1;
    }
    if(a.length<b.length){
      return -1;
    }
    return 0;
  });
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  const arrayNuevo=[];
  var interseccion=false;
  arreglo1.sort();
  arreglo2.sort();
  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if(arreglo2[j]===arreglo1[i]){
        arrayNuevo.push(arreglo2[j]);
        interseccion=true;
      }
    }
    
  }  
  if(interseccion===true){
    return arrayNuevo;
  }else{
    return [];
  }
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

