//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const show$$ = document.querySelector(".showme")

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const pillado$$ = document.querySelector("#pillado");
console.log(pillado$$)
//1.3 Usa querySelector para mostrar por consola todos los p
const todoP$$ = document.querySelectorAll("p");
console.log(todoP$$)
//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const pokemon$$ = document.querySelectorAll(".pokemon");
console.log(pokemon$$)
//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const test$$ = document.querySelectorAllquerySelectorAll('[data-function="testMe"]');
console.log(test$$)
//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
const personajes$$ = document.querySelectorAll('[data-function="testMe"]');

console.log(personajes$$[2].innerHTML);


