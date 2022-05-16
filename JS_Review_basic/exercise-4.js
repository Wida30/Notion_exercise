const numbers = [12, 21, 38, 5, 45, 37, 6];

let suma= 0;

function average(param) {
    for (let i = 0; i < param.length; i++) {
        suma += param[i]/param.length
    }
  
}

average(numbers)

console.log(suma)