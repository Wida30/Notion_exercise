//**Iteración #1: Mix for e includes**

//Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función **.includes()**

const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

const category = [];

for (const movie of movies) {
  for (let e = 0; e < movie.categories.length; e++) {
    for (let x = 1; x < movie.categories.length; x++) {
      if (movie.categories[e].length !== movie.categories[x].length) {
        category.push(movie.categories[e]);
      }
    }
  }
}

/*for (const movie of movies) {
  for (let e = 0; e < movie.categories.length; e++) {
    category.push(movie.categories[e]); 
  }  
}
console.log(category)
console.log(typeof(category))

for (let i = 0; i < category.length; i++) {
    for (let e = 1; e < category.length; e++) {
        if (category[i] === category[e]) {
           category.splice(1,1);
        }
    };    
}*/

console.log(category);
