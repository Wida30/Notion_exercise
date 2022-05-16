//Suma total de array

const numbers = [1, 2, 3, 5, 45, 37, 58];

let sumatotal = 0;

function sumAll(datosASumar) {
  for (let i = 0; i < datosASumar.length; i++) {
      sumatotal += datosASumar[i];   
      
  }
}
sumAll(numbers)

console.log(sumatotal) 
