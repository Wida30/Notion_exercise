//**Iteración #2: Buscar la palabra más larga**
//Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud //deberá devolver el primero.

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

let longestword = "";

function findLongestWord(cosaEnLlamadaFuncion) {
  for (let i = 0; i < cosaEnLlamadaFuncion.length; i++) {
      if (longestword.length < cosaEnLlamadaFuncion[i].length) {
          longestword = cosaEnLlamadaFuncion[i];
          //console.log(longestword);
      }
      
  }
}

findLongestWord(avengers)
console.log(longestword)
