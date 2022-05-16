//**Iteration #8: Contador de repeticiones**

//Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];

  const repeat = [];  

  function repeatCounter(param) {
      for (let i = 0; i < param.length; i++) {
          for (let e = 1; e < param.length; e++) {
              if (param[i] === param[e]) {
                  repeat.push(param[i])

                  console.log(repeat)
                  
              }
          }
          
      }

   
  }
  repeatCounter(counterWords)