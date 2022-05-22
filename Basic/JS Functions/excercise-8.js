//**Iteration #8: Contador de repeticiones**

//Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

const repeat = [];

let repeticion = 0;

function repeatCounter(param) {
  for (let i = 0; i < param.length; i++) {
    for (let e = 0; e < param.length; e++) {
      if (param[i] == param[e]) {
        repeticion = repeticion + 1;
      }
    }
    repeat.push(param[i], repeticion);
    repeticion = 0;
  }
}
repeatCounter(counterWords);

console.log(repeat);


// function repeatCounter(param) {
//   let counter = {};
//   for (let i = 0; i < param.length; i++) {
//     if (param[i] in counter) {
//       counter[param[i]]++;
//     } else {
//       counter[param[i]] = 1;
//     }
//   }
//   return console.log(counter);
// }

// repeatCounter(counterWords);
