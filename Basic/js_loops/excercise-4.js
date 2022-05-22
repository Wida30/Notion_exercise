//**Iteración #4: Probando For...in**

//Usa un **for...in** para imprimir por consola los datos del alienígena..

const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};

let alienName = " ";

for (const key in alien) {
  {
    alienName += alien[key] + " ";
  }
}

console.log(alienName);
