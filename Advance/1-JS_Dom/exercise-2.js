//2.1 Inserta dinamicamente en un html un div vacio con javascript.

const divVacio$$ = document.createElement("div");
divVacio$$.innerText = "div vacio"
document.body.appendChild(divVacio$$)

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const contenedorDiv$$ = document.createElement("div");
const pDentro$$ = document.createElement("p")
pDentro$$.innerText = "P dentro de div"
contenedorDiv$$.appendChild(pDentro$$)
document.body.appendChild(contenedorDiv$$)

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const divX6$$ = document.createElement("div")
for (let i = 0; i < 6; i++) {
    const pX6$$ = document.createElement("p")
    pX6$$.innerText = "6P dentro de un div"
    divX6$$.appendChild(pX6$$)
}

document.body.appendChild(divX6$$)

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const dinamicP$$ = document.createElement("p")
dinamicP$$.innerText = "Soy dinámico"
document.body.appendChild(dinamicP$$)

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const changeText$$ = document.querySelector("h2")
changeText$$.innerText= 'Wubba Lubba dub dub'

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const listado$$ = document.createElement("ul")
for (const app of apps) {
    const creaFila$$ = document.createElement("li")
    creaFila$$.innerText = app
    listado$$.appendChild(creaFila$$)    
}

document.body.appendChild(listado$$)

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const erase$$ = document.querySelectorAll(".fn-remove-me")
for (const erase of erase$$) {
    erase.remove()
}


//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

const newP$$ = document.createElement("p");
const entreDiv$$ = document.querySelectorAll("div");

newP$$.innerText = "Voy en medio!";

document.body.insertBefore(newP$$, entreDiv$$[1]);


//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const dentro$$ = document.querySelectorAll(".fn-insert-here");

for (let i = 0; i < dentro$$.length; i++) {
    
    const creaP$$ = document.createElement("p")
    creaP$$.innerText= "Voy dentro !!"

    dentro$$.appendChild(creaP$$)
}

