//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const paises = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const newList$$ = document.createElement("ul");

for (const pais of paises) {
	const filaLista$$ = document.createElement("li");
	filaLista$$.innerText = pais;
	newList$$.appendChild(filaLista$$);
}

document.body.appendChild(newList$$)

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const delete$$ = document.querySelector(".fn-remove-me")
delete$$.remove()

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const meteLista$$ = document.querySelector(".printHere");
const creaLista$$ = document.createElement("ul");

for (const car of cars) {

    const creaFila$$ = document.createElement("li");
    creaFila$$.innerText = car;
    creaLista$$.appendChild(creaFila$$)
    
};
meteLista$$.appendChild(creaLista$$)

document.body.appendChild(meteLista$$)

/*meteLista$$.appendChild(creaLista$$)

document.body.appendChild(meteLista$$)*/

document.body.appendChild(creaLista$$)

//1.4 Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const tierra$$ = document.createElement("div");

for (const country of countries) {

	const country$$ = document.createElement("div")

	country$$.innerHTML =`
		<h4>${country.title}</h4>
		<img src ="${country.imgUrl}" alt="${country.title}"/>
	`;

	tierra$$.appendChild(country$$)
};

document.body.appendChild(tierra$$)


//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.

const deleteLast$$ = document.querySelector(".delete-last-element")

const botonBorrar = () => {
    deleteLast$$[deleteLast$$.length-1].remove()
}

deleteLast$$.addEventListener.("click", remove)

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.

